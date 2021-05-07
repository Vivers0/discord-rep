const { Client: DiscordClient } = require('discord.js')
const DiscordRep = require("../index")

const client = new DiscordClient()
const rep = new DiscordRep()

client.on('ready', () => {
    console.log("Ready!")
    rep.connect("mongodb://localhost/DiscordRep")
})

client.on("message", message => {
    if (message.content.startsWith("!rep")) {
        let user = message.mentions.users.first()
        rep.add(user.id, message.guild.id).then(res => {
            message.channel.send(`<@${message.author.id}> gave a reputation <@${res.userID}>.\nHe(She) currently has **${res.rep}** reputation`)
        })
    }
    if (message.content.startsWith("!deleterep") && message.author.id === message.guild.ownerID) {
        let user = message.mentions.users.first()
        rep.delete(user.id, message.guild.id).then(res => {
            message.channel.send(`<@${message.author.id}> delete a reputation <@${res.userID}>`)
        })
    }
})

client.login("TOKEN")
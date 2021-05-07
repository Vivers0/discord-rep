const mongoose = require('mongoose');

function DiscordRep () {
  this.mongoUrl = "";
  this.base = require('./schema/Base')
}

DiscordRep.prototype.connect = function(mongoUrl) {
  this.mongoUrl = mongoUrl;
  if (!mongoUrl) throw new TypeError("A database url was not provided.");
  return mongoose.connect(this.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
}

/**
  * @param {string} [userID] - Discord user id.
  * @param {string} [guildID] - Discord guild id.
  */
DiscordRep.prototype.add = async function(userID, guildID) {
  if (!userID) throw new TypeError("An user id was not provided.");
  if (!guildID) throw new TypeError("A guild id was not provided.");
  if (await this.base.findOne({ userID, guildID }) === null) {
    const newUser = new this.base({ userID, guildID, rep: 1 })
    newUser.save().catch(e => {
      throw new TypeError(`Failed to create user: ${e}`)
    })
    return newUser
  } else {
    const user = await this.base.findOneAndUpdate({ userID, guildID })
    user.rep++;
    user.save().catch(e => {
        throw new TypeError(`Failed to create user: ${e}`)
    })
    return user;
  }
}

/**
  * @param {string} [userID] - Discord user id.
  * @param {string} [guildID] - Discord guild id.
  */
DiscordRep.prototype.delete = async function(userID, guildID) {
  if (!userID) throw new TypeError("An user id was not provided.");
  if (!guildID) throw new TypeError("A guild id was not provided.");
  const user = await this.base.findOne({ userID, guildID })
  if (!user) throw new TypeError("User isn't in database")
  await this.base.findOneAndDelete({ userID, guildID }).catch(e => console.log(`Failed to delete user: ${e}`));
  return user; 
}

module.exports = DiscordRep
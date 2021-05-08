declare module "discord-rep" {
    export default class DiscordRep {
      static connect(url: string): Promise<typeof import("mongoose")>;
      static add(userID: string, guildID: string): Promise<User>;
      static delete(userID: string, guildID: string): Promise<User>;
      static leaderboard(guildID: string): Promise<User>;
    }
}
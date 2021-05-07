# Discord-Rep
This library will help you easily create a simple reputation system for your discord server.
# Download & Update
Download:
```
npm i discord-rep
```
Update:
```
npm update discord-rep
```
# Setting Up
Include the module into the project:
```javascript
const DiscordRep = require("discord-rep");
// Connect to MongoDB
const rep = DiscordRep("mongodb://...")
```
# Examples
Examples can be found in /example
# Methods
**add**   
adding one reputation to the user profile
```javascript
rep.add(<userID - String>, <GuildID - String>)
```
Output:
```
Promise<Object>
```
**delete**   
Removes user profile
```javascript
rep.delete(<userID - String>, <GuildID - String>)
```
Output:
```
Promise<Object>
```
# P.S.
This is my first library. The creation template was taken from [MrAugu](https://github.com/MrAugu).
The library will expand over time.
If you have any questions, please create an Issue
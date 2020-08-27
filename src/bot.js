/* jslint esversion: 6 */

require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "!";

client.on('ready', () => {
   console.log(`${client.user.tag} has logged in.`);
   client.user.setActivity('Mayonnaise', { type: 'LISTENING' });
});

client.on('message', (message) => {
   if (message.author.bot) return; // Don't respond to bot messages

   if (message.content.startsWith(PREFIX)) { // Check if message is a command
      const [cmd, ...args] = message.content
         .trim()
         .substring(PREFIX.length)
         .split(/\s+/);
      if(cmd === 'mayo') {
         let num = Math.floor(Math.random() * (6 - 1 + 1) + 1);
         if (num === 6) {
            message.channel.send("Who wants some FUCKING MAYON..", {files: ["src/images/6.jpg"]});
            setTimeout( () => {
               message.channel.send(".. what's that? VEGANAISE!? GET THAT SHIT OUT OF HERE (ノಠ益ಠ)ノ彡┻━┻");
            }, 1000);
         } else {
            message.channel.send("Who wants some FUCKING MAYONNAISEEEEEEE!?", {files: ["src/images/" + num + ".jpg"]});
         }
      }
   }
});

client.login(process.env.DISCORD_TOKEN);
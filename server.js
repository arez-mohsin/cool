const http = require("http");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://partner1er1.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const ms = require("ms");
const enmap = require("enmap");
const moment = require("moment");
const client = new Discord.Client();
const db = new enmap({ name: "test" });



client.on("ready", () => {
console.log('♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔');
console.log('By black jack');/////BLACK JACK 
console.log('♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔');
console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity(`Partner Bot|ڕیکلام بۆ من بنێرە `)///////shtek bnwsa
client.user.setStatus("dnd")/////ba dly xot statusek bnwsa
console.log(`Logined`)
})


client.on("message", message => {
if (message.channel.type === "dm") {
if(message.content.startsWith("https://discord.gg")) 
client.channels.cache.get("803526086604095497").send(`<@${message.author.id}> ${message.content}`)
message.author.send("**https://discord.gg/VjRd5VfJCr Done chek partner**")
message.author.send("<803526086604095497>")
}
});

client.on('message', msg => {
    if (msg.content === 'Reklam akan') {
      msg.reply('BOM BNERA');
    }
  });
client.on('message', msg => {
    if (msg.content === 'reklam haya') {
      msg.reply('BOM BNERA');
    }
  });

client.on('message', msg => {
    if (msg.content === 'Slaw reklam agornawa') {
      msg.reply('BOM BNERA');
    }
  });

client.on('message', msg => {
    if (msg.content === 'ڕیکلام ئەگۆڕنەوە') {
      msg.reply('بۆ منی بنێرە گیان');
    }
  });

client.on('message', msg => {
    if (msg.content === 'سڵاو  ڕیکلام ئەگۆڕنەوە') {
      msg.reply('بنێرە بۆ من دڵم');
    }
  });
  
client.login(process.env.TOKEN);

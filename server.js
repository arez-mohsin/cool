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
const moment = require("moment");
const client = new Discord.Client();


client.on("ready", async () => {
    console.log(`Bot Is Ready To Go & Online!`);
    client.user.setActivity(`PARTNER BOT | لینکی سێرڤەر بنێرە`);
  
});

client.on('message', msg => {
    if (msg.content === 'Reklam') {
      msg.reply('BOM BNERA');
    }
  });
client.on('message', msg => {
    if (msg.content === 'Reklam haya') {
      msg.reply('BOM BNERA');
    }
  });

const cooldown= new Set()
const cdtime = 60
client.on("message", message => {
if (message.channel.type === "dm") {
  if (cooldown.has(message.author.id)) {
      return message.author
        .send(`:stopwatch: | **Please wait for ${cdtime} second**`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);  
if(message.content.startsWith("https://discord.gg")) 
client.channels.cache.get("968655183758381070").send(`<@${message.author.id}> ${message.content}`)
message.author.send("Done check partner https://discord.gg/cPP42KMD")
message.author.send("<#968655183758381070>")
}
});





client.login(process.env.TOKEN_BOT);

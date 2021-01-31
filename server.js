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





client.on("ready", async () => {
    console.log(`Bot Is Ready To Go & Online!`);
    client.user.setActivity(`PARTNER BOT | لینکی سێرڤەر بنێرە`);
  
});

client.on("message", message => {
if (message.channel.type === "dm") {
if(message.content.startsWith("https://discord.gg")) 
message.author.send("<#803526086604095497>")
message.author.send("**Done check partner https://discord.gg/WYBp6UPDUK**")
message.author.send(`<@${message.author.id}>`)
client.channels.cache.get("803526086604095497").send(`<@${message.author.id}> ${message.content}`)

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
    if (msg.content === 'reklam agornawa mama') {
      msg.reply('gyani mama bnera bo mn');
    }
  });

client.on('message', msg => {
    if (msg.content === 'slav reklam agornawa') {
      msg.reply('bale ps mam bnera bo mn');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'ڕیکلام هەیە مامە') {
      msg.reply('بەڵێ دڵم بنێرە');
    }
  });
client.on('message', msg => {
    if (msg.content === 'ڕیکلام دەگۆڕنەوە ئێوە') {
      msg.reply('بەڵێ دڵم بنێرە');
    }
  });

client.on('message', msg => {
    if (msg.content === 'سلاو ریکلام هیە') {
      msg.reply('بەڵێ دڵم بنێرە');
    }
  });

client.on('message', msg => {
    if (msg.content === 'ڕیکلام ئەگۆڕنەوە') {
      msg.reply('بۆ منی بنێرە گیان');
    }
  });

client.on('message', msg => {
    if (msg.content === 'سڵاو ڕیکلام ئەگۆڕنەوە') {
      msg.reply('بنێرە بۆ من دڵم');
    }
  });
client.login(process.env.TOKEN);

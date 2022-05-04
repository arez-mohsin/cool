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

const cooldown= new Set()
client.on("message", message => {
if (message.channel.type === "dm") {
if(message.content.startsWith("https://discord.gg")) 
if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`:stopwatch: | **Please wait for ${cdtime} second**`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);  
client.channels.cache.get("968655183758381070").send(`<@${message.author.id}> ${message.content}`)
message.author.send("Done check partner https://discord.gg/cPP42KMD")
message.author.send("<#968655183758381070>")
}
});

client.on('message', msg => {
    if (msg.content === 'reklam akan') {
      msg.reply('BOM BNERA');
    }
  });
client.on('message', msg => {
    if (msg.content === 'reklam haya') {
      msg.reply('BOM BNERA');
    }
  });

client.on('message', msg => {
    if (msg.content === 'slaw reklam agornawa') {
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
client.login("ODAzNTk4NzgwOTQzMzAyNjU2.YBAHrw.Nti1vyRCUj38VUVIJCavGdb38PA");


const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const TOKEN = process.env.TOKEN_BOT

const { Client, Intents, MessageEmbed, Permissions } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const fs = require("fs");
const ms = require("ms");
let count = 0;
setInterval(
  () =>
    require("node-fetch")(process.env.URL).then(() =>
      console.log(`[${++count}] here i pinged ${process.env.URL}`)
    ),
  300000
);


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





client.login(TOKEN);

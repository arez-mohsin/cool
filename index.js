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
const prefix = "Y";
client.on("ready", () => console.log(`${client.user.tag} Telah Online!`));

client.on("ready", () => {
  console.log("ALLAH AKBAR");
  console.log("♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔");
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ");
  client.user.setPresence({
    activities: [{ name: `${prefix}help | Yato Bot Version 13` }],
    status: "dnd"
  });
  console.log(`Logined`);
});


var trust = require("./trusted.json");
function saveList() {
  fs.writeFileSync("./trusted.json", JSON.stringify(trust, null, 4));
}
client.on("messageCreate", message => {
if(message.content === prefix + "add trust"){
if(message.author.id !=== message.guild.ownerId) return message.reply("This Command Just Owner Ship Can Use It")
  }
})



client.login(process.env.TOKEN_BOT);

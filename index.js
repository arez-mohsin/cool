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
    activities: [{ name: `${prefix}help | Long Live MrBlackJack` }],
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
if(message.author.id !== message.guild.ownerId) return message.reply("This Command Just Owner Ship Can Use It")
let args = message.content.split(" ").slice(1).join("")
let member = message.mentions.users.first()
if(!args) return message.reply("Please Mention Member To Add Trust List")
if(!member) return message.reply("Member Not Founded")
if(!trust[member.id])
trust[member.id] = {
trusted: "Off"
}      
  if(trust[member.id].Blacklist === "Off") {
    let embed = new MessageEmbed()
  .setTitle("Done Added on Trusted List")
  .addField("Member", member.toString())
  .setFooter(message.guild.name)
  message.channel.send({embeds: [embed]})     
trust[member.id].trusted = "On";
saveList()
}
}})
 client.on("messageCreate", message => { 
if(message.content === prefix + "remove"){
  if(message.author.id !== message.guild.ownerId) return message.reply("This Command Just Owner Ship Can Use It")
let args = message.content.split(" ").slice(1).join("")
let member = message.mentions.users.first()
if(!args) return message.reply("Please Mention Member To Add Trust List")
if(!member) return message.reply("Member Not Founded")
if(!trust[member.id])
trust[member.id] = {
trusted: "Off"
}      
  if(trust[member.id].Blacklist === "Off") {
    let embed = new MessageEmbed()
  .setTitle("Done Added on Trusted List")
  .addField("Member", member.toString())
  .setFooter(message.guild.name)
  message.channel.send({embeds: [embed]})     
trust[member.id].trusted = "Off";
saveList()
  }
}})



client.login(process.env.TOKEN_BOT);

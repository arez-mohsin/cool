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
client.user.setStatus("Shex Balen")/////ba dly xot statusek bnwsa
console.log(`Logined`)
})


client.on("message", message => {
if (message.channel.type === "dm") {
if(message.content.startsWith("https://discord.gg")) 
client.channels.cache.get("id channel").send(`<@${message.author.id}> ${message.content}`)
message.author.send("**Done chek partner**")
message.author.send("<#id channel>")
}
});


  
client.login(process.env.TOKEN);

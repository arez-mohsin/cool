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
const prefix = "B";
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
if(message.content.startsWith(prefix + "add")){
if(message.author.id !== message.guild.ownerId) return message.reply("This Command Just Owner Ship Can Use It")
let args = message.content.split(" ").slice(1).join("")
let member = message.mentions.users.first()
if(!args) return message.reply("Please Mention Member To Add Trust List")
if(!member) return message.reply("Member Not Founded")
    let embed = new MessageEmbed()
  .setTitle("Done Added on Trusted List")
  .addField("Member", member.toString())
  .setFooter(message.guild.name)
  message.channel.send({embeds: [embed]})      
if(!trust[member.id])
    trust[member.id] = {
    trusted: "On"
}
}
  saveList()
})

 client.on("messageCreate", message => { 
if(message.content.startsWith(prefix + "remove")){
  if(message.author.id !== message.guild.ownerId) return message.reply("This Command Just Owner Ship Can Use It")
let args = message.content.split(" ").slice(1).join("")
let member = message.mentions.users.first()
if(!args) return message.reply("Please Mention Member To Add Trust List")
if(!member) return message.reply("Member Not Founded")
    let embed = new MessageEmbed()
  .setTitle("Done Added on Trusted List")
  .addField("Member", member.toString())
  .setFooter(message.guild.name)
  message.channel.send({embeds: [embed]}) 
  if(!trust[member.id])
    trust[member.id] = {
    trusted: "Off"
}
trust[member.id].trusted = "Off"
  }
  saveList()
})

client.on("channelCreate", async (channel) => {
  const auditLogs = await channel.guild.fetchAuditLogs({ limit: 2, type: "CHANNEL_CREATE" });
  const logs = auditLogs.entries.first();
  const { executor, target } = logs;
   if(!trust[channel.id])
trust[channel.id] = {
trusted: "Off"
}      
  if(trust[channel.id].trusted === "Off") {
  }
 if(executor.id === channel.guild.ownerId) return
  if(trust == true) return

  channel.guild.members.kick(executor.id, { 
    reason: "Anti Channel Create"
  })
 channel.guild.owner.send(`The ${executor.id} Channel Is Creating`)
 
});

client.on("channelDelete", async (channel) => {
  const auditLogs = await channel.guild.fetchAuditLogs({ limit: 2, type: "CHANNEL_DELETE" });
  const logs = auditLogs.entries.first();
  const { executor, target } = logs;
   if(!trust[channel.id])
trust[channel.id] = {
trusted: "Off"
}      
  if(trust[channel.id].trusted === "Off") {
  }
 if(executor.id === channel.guild.ownerId) return
  if(trust == true) return

  channel.guild.members.kick(executor.id, { 
    reason: "Anti Channel Delete"
  })
 channel.guild.owner.send(`The ${executor.id} Channel Is Deleting`)
 
});

client.on("roleDelete", async (role) => {
  const auditLogs = await role.guild.fetchAuditLogs({ limit: 2, type: "ROLE_DELETE" });
  const logs = auditLogs.entries.first();
  const { executor, target } = logs;
   if(!trust[role.id])
trust[role.id] = {
trusted: "Off"
}      
  if(trust[role.id].trusted === "Off") {
  }
 if(executor.id === role.guild.ownerId) return
  if(trust == true) return

  role.guild.members.kick(executor.id, { 
    reason: "Anti Role Delete"
  })
 role.guild.owner.send(`The ${executor.id} Role Is Deleting`)
 
});

client.on("roleCreate", async (role) => {
  const auditLogs = await role.guild.fetchAuditLogs({ limit: 2, type: "ROLE_CREATE" });
  const logs = auditLogs.entries.first();
  const { executor, target } = logs;
   if(!trust[role.id])
trust[role.id] = {
trusted: "Off"
}      
  if(trust[role.id].trusted === "Off") {
  }
 if(executor.id === role.guild.ownerId) return
  if(trust == true) return

  role.guild.members.kick(executor.id, { 
    reason: "Anti Role Create"
  })
 role.guild.owner.send(`The ${executor.id} Role Is Creating`)
})

client.on("emojiCreate", async (emoji) => {
  const auditLogs = await emoji.guild.fetchAuditLogs({ limit: 2, type: "EMOJI_CREATE" });
  const logs = auditLogs.entries.first();
  const { executor, target } = logs;
   if(!trust[emoji.id])
trust[emoji.id] = {
trusted: "Off"
}      
  if(trust[emoji.id].trusted === "Off") {
  }
 if(executor.id === emoji.guild.ownerId) return
  if(trust == true) return

  emoji.guild.members.kick(executor.id, { 
    reason: "Anti Emoji Create"
  })
 emoji.guild.owner.send(`The ${executor.id} Emoji Is Creating`)
});

client.on("emojiDelete", async (emoji) => {
  const auditLogs = await emoji.guild.fetchAuditLogs({ limit: 2, type: "EMOJI_DELETE" });
  const logs = auditLogs.entries.first();
  const { executor, target } = logs;
   if(!trust[emoji.id])
trust[emoji.id] = {
trusted: "Off"
}      
  if(trust[emoji.id].trusted === "Off") {
  }
 if(executor.id === emoji.guild.ownerId) return
  if(trust == true) return

  emoji.guild.members.kick(executor.id, { 
    reason: "Anti Emoji Deleting"
  })
 emoji.guild.owner.send(`The ${executor.id} Emoji Is Deleting`)
})

client.on("guildBanAdd", async (member) => {
  const auditLogs = await member.guild.fetchAuditLogs({ limit: 2, type: "MEMBER_BAN_ADD" });
  const logs = auditLogs.entries.first();
  const { executor, target } = logs;
   if(!trust[member.id])
trust[member.id] = {
trusted: "Off"
}      
  if(trust[member.id].trusted === "Off") {
  }
 if(executor.id === member.guild.ownerId) return
  if(trust == true) return

  member.guild.members.kick(executor.id, { 
    reason: "Anti Member Ban"
  })
 member.guild.owner.send(`The ${executor.id} Has Many Ban Members`)
})

client.on("guildKickAdd", async (member) => {
  const auditLogs = await member.guild.fetchAuditLogs({ limit: 2, type: "MEMBER_KICK_ADD" });
  const logs = auditLogs.entries.first();
  const { executor, target } = logs;
   if(!trust[member.id])
trust[member.id] = {
trusted: "Off"
}      
  if(trust[member.id].trusted === "Off") {
  }
 if(executor.id === member.guild.ownerId) return
  if(trust == true) return
  
  member.guild.members.kick(executor.id, { 
    reason: "Anti Member Kick"
  })
 member.guild.owner.send(`The ${executor.id} Has Many Kick Members`)
})

client.login(process.env.TOKEN_BOT);

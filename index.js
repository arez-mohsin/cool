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


const prefix = "b!";
client.on("ready", () => console.log(`${client.user.tag} Telah Online!`));

client.on("ready", () => {
  console.log("ALLAH AKBAR");
  console.log("♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔");
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ");
  client.user.setPresence({
    activities: [{ name: `Protection Bot Yato` }],
    status: "dnd"
  });
  console.log(`Logined`);
});



 

const trust = require("./trusted.json");
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
trust[member.id].trusted = "On"
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
  const { executor } = logs;
   if(!trust[executor.id])
trust[executor.id] = {
trusted: "Off"
}      
  if(trust[executor.id].trusted === "Off") {
  }
 if(executor.id === channel.guild.ownerId) return
  if(trust === true) return

  channel.guild.members.kick(executor.id, { 
    reason: "Anti Channel Create"
  })
 let log = channel.guild.channels.cache.find(c => c.name === "log")
 if(!log) return
log.send(`The ${executor.id} Channel Is Creating`)
});

client.on("channelDelete", async (channel) => {
  const auditLogs = await channel.guild.fetchAuditLogs({ limit: 2, type: "CHANNEL_DELETE" });
  const logs = auditLogs.entries.first();
  const { executor } = logs;
   if(!trust[executor.id])
trust[executor.id] = {
trusted: "Off"
}      
  if(trust[executor.id].trusted === "Off") {
  }
 if(executor.id === channel.guild.ownerId) return
  if(trust === true) return
  executor.guild.members.kick(executor.id, {reason: "Channel Delete"})
let log = channel.guild.channels.cache.find(c => c.name === "log")
 if(!log) return
log.send(`The ${executor.id} Channel Is Deleting`) 
});

client.on("roleDelete", async (role) => {
  const auditLogs = await role.guild.fetchAuditLogs({ limit: 2, type: "ROLE_DELETE" });
  const logs = auditLogs.entries.first();
  const { executor } = logs;
   if(!trust[executor.id])
trust[executor.id] = {
trusted: "Off"
}      
  if(trust[executor.id].trusted === "Off") {
  }
 if(executor.id === role.guild.ownerId) return
  if(trust === true) return

  role.guild.members.kick(executor.id, { 
    reason: "Anti Role Delete"
  })
 let log = role.guild.channels.cache.find(c => c.name === "log")
 if(!log) return
log.send(`The ${executor.id} Emoji Is Deleting`)
});

client.on("roleCreate", async (role) => {
  const auditLogs = await role.guild.fetchAuditLogs({ limit: 2, type: "ROLE_CREATE" });
  const logs = auditLogs.entries.first();
  const { executor } = logs;
   if(!trust[executor.id])
trust[executor.id] = {
trusted: "Off"
}      
  if(trust[executor.id].trusted === "Off") {
  }
 if(executor.id === role.guild.ownerId) return
  if(trust === true) return 
  
  role.guild.members.kick(executor.id, { 
    reason: "Anti Role Create"
  })
  let log = role.guild.channels.cache.find(c => c.name === "log")
 if(!log) return
log.send(`The ${executor.id} Role Is Creating`)
})

client.on("emojiCreate", async (emoji) => {
  const auditLogs = await emoji.guild.fetchAuditLogs({ limit: 2, type: "EMOJI_CREATE" });
  const logs = auditLogs.entries.first();
  const { executor } = logs;
   if(!trust[executor.id])
trust[executor.id] = {
trusted: "Off"
}      
  if(trust[executor.id].trusted === "Off") {
  }
 if(executor.id === emoji.guild.ownerId) return
  if(trust === true) return

  emoji.guild.members.kick(executor.id, { 
    reason: "Anti Emoji Create"
  })
  let log = emoji.guild.channels.cache.find(c => c.name === "log")
 if(!log) return
log.send(`The ${executor.id} Emoji Is Creating`)
});

client.on("emojiDelete", async (emoji) => {
  const auditLogs = await emoji.guild.fetchAuditLogs({ limit: 2, type: "EMOJI_DELETE" });
  const logs = auditLogs.entries.first();
  const { executor } = logs;
   if(!trust[emoji.id])
trust[emoji.id] = {
trusted: "Off"
}      
  if(trust[emoji.id].trusted === "Off") {
  }
 if(executor.id === emoji.guild.ownerId) return
  if(trust === true) return

  emoji.guild.members.kick(executor.id, { 
    reason: "Anti Emoji Deleting"
  })
  let log = emoji.guild.channels.cache.find(c => c.name === "log")
 if(!log) return
log.send(`The ${executor.id} Emoji Is Deleting`)
})

client.on("guildBanAdd", async (member) => {
  const auditLogs = await member.guild.fetchAuditLogs({ limit: 2, type: "MEMBER_BAN_ADD" });
  const logs = auditLogs.entries.first();
  const { executor } = logs;
   if(!trust[executor.id])
trust[executor.id] = {
trusted: "Off"
}      
  if(trust[member.id].trusted === "Off") {
  }
 if(executor.id === member.guild.ownerId) return
  if(trust === true) return

  member.guild.members.kick(executor.id, { 
    reason: "Anti Member Ban"
  })
  let log = member.guild.channels.cache.find(c => c.name === "log")
 if(!log) return
log.send(`The ${executor.id} Has Many Kick Member`)
})

client.on("guildKickAdd", async (member) => {
  const auditLogs = await member.guild.fetchAuditLogs({ limit: 2, type: "MEMBER_KICK" });
  const logs = auditLogs.entries.first();
  const { executor } = logs;
   if(!trust[executor.id])
trust[executor.id] = {
trusted: "Off"
}      
  if(trust[executor.id].trusted === "Off") {
  }
 if(executor.id === member.guild.ownerId) return
  if(trust === true) return
  
  member.guild.members.kick(executor.id, { 
    reason: "Anti Member Kick"
  })
 let log = member.guild.channels.cache.find(c => c.name === "log")
 if(!log) return
log.send(`The ${executor.id} Kick Member`)
})

var antibots = require("./antibots.json");
function saveAbot() {
    fs.writeFileSync("./antibots.json", JSON.stringify(antibots, null, 4));
}
client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "antibot on")) {
    if (message.author.bot || !message.channel.guild) return;
    if (message.author.id !== message.guild.ownerId)return message.channel.send("**🔐 Sorry just For Owner ship**");
    antibots[message.guild.id] = {
      onoff: "on"
    };
    saveAbot()
         let embed = new MessageEmbed()
        .setThumbnail(message.guild.iconURL())
        .setTitle("Toggle Antibot")
        .setDescription("**The Anti Bots Join Is On 🔐 **")
        .addField("**By**", `<@${message.author.id}>`)
        .setColor("9e1c36")
        .setFooter(`${client.user.username}`)
        .setTimestamp()
        message.channel.send({embeds: [embed]})
  }})
client.on("messageCreate", message => {
    if(message.content.startsWith(prefix + "antibot off")) {
          if(!message.channel.guild) return;
  if (message.author.id !== message.guild.ownerId) return message.reply("Just For Owner ship")
  antibots[message.guild.id] = {
  onoff: 'Off',
  }
  saveAbot()
 
      let embed = new MessageEmbed()
        .setThumbnail(message.guild.iconURL())
        .setTitle("Toggle Antibot")
        .setDescription("**The AntiBots Join Is Off 🔐 **")
        .addField("**By**", `<@${message.author.id}>`)
        .setColor("9e1c36")
        .setFooter(`${client.user.username}`)
        .setTimestamp()
       message.channel.send({embeds: [embed]})
    }    
 
 })

client.on("guildMemberAdd", member => {  
    if(antibots[member.guild.id].onoff === 'On') return;
  if(member.user.bot) return member.kick()
  saveAbot();
  })

client.on("messageCreate", message => {
if(message.content == prefix + "help"){
const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId("select")
      .setPlaceholder("Select Commands")
      .addOptions([
        {
          label: "THis is selection 1",
          description: "CLick here to see Commands 1!",
          value: "first",
          emoji: ""          
        },
        {
          label: "THis is selection 2",
          description: "CLick here to see Commands 2!",
          value: "second",
          emoji: ""
        },
        {
          label: "THis is selection 3",
          description: "CLick here to see Commands 3!",
          value: "third",
          emoji: ""          
        },
      ])
    )
 
let embed = new MessageEmbed()
    .setAuthor(message.author.username,message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setTitle("Name your bot")
    .setDescription("Choose the option you want to select")
    .setColor("RANDOM")
 
    message.channel.send({embeds : [embed], components:[row]})
 
 
const collector = message.channel.createMessageComponentCollector({
  componentType: "SELECT_MENU"
})
 
let help1 = new MessageEmbed()
.setAuthor(message.author.username,message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setTitle("You Selected Help 1")
    .setDescription("Write a commands general")
    .setColor("RANDOM")
 
    let help2 = new MessageEmbed()
.setAuthor(message.author.username,message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setTitle("You Selected Help 2")
    .setDescription("Write A commands admin")
    .setColor("RANDOM")
 
    let help3 = new MessageEmbed()
.setAuthor(message.author.username,message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setTitle("You Selected Help 3")
    .setDescription("Write A commands music or other")
    .setColor("RANDOM")
 
collector.on("collect", async (collected) => {
const value = collected.values[0]
 
if(value === "first") {
  collected.reply({embeds:[help1], ephemeral:true})
}
 
if(value === "second") {
  collected.reply({embeds:[help2], ephemeral:true})
}
 
if(value === "third") {
  collected.reply({embeds:[help3], ephemeral:true})
}
 
})
}});

client.on("messageCreate", black => {
  if (black.content.startsWith(prefix + "serverinfo")) {
    var embed = new MessageEmbed()
      .setAuthor(black.guild.name)
      .setThumbnail(black.guild.iconURL())
      .setTitle("**Info Server**")
      .addField("**Server Name:**", `${black.guild.name}`)
      .addField("**Owner Server:**", `<@${black.guild.ownerId}>`)
      .addField("**Server ID:**", `${black.guild.id}`)
      .addField("**Created:**", `${black.guild.createdAt.toLocaleString()}`)
      .addField("**Emojis**", `${black.guild.emojis.cache.size}`, true)
      .addField("**Members:**", `${black.guild.memberCount}`)
      .addField("**Channels:**", `${black.guild.channels.cache.size}`)
      .addField("**Region**:", black.guild.region || `None`)
      .addField(`**Boosts**`, `${black.guild.premiumSubscriptionCount}`, true)
      .addField("**Roles:**", ` ${black.guild.roles.cache.size}`)
      .addField("AFK Timeout", black.guild.afkTimeout / 60 + " minutes", true)
      .setFooter(`Requested | ${black.author.tag}`, black.author.avatarURL())
      .addField('**Onlines**',`${black.guild.members.cache.filter(m=>m.presenceStatus == 'online').size}`)
      .addField('**DO NOT DISTRUB**',`${black.guild.members.cache.filter(m=>m.presenceStatus == 'dnd').size}`)
      .addField('**Idle**',`${black.guild.members.cache.filter(m=>m.presenceStatus == 'idle').size}`)
      .addField('**Offlines**',`${black.guild.members.cache.filter(m=>m.presenceStatus == 'offline').size}`)
      .addField('**All Members**',`${black.guild.memberCount}`)
      .setColor("RANDOM")
      .setTimestamp();
    black.channel.send({ embeds: [embed]})
  }
});
 
client.on('messageCreate', async message => {  
  if (message.content.startsWith(prefix + "clear")) {
if(!message.member.permissions.has("MANAGE_CHANNELS")) return;
message.channel.messages.fetch().then(messages => {
message.channel.bulkDelete(messages)
let embed = new MessageEmbed()
.setTitle(`Cleared Messages`)
.addField(`Moderation`,`<@${message.author.id}>`)
.setFooter(`Requested By | ${message.author.tag} `)
message.channel.send({ embeds: [embed]}).then(mssg => {
mssg.delete(35000)
})
})
}});      
 
client.on('messageCreate', message => {
  
            if(message.content.startsWith(prefix + "membercount")) {
let all = message.guild.memberCount
let users = message.guild.members.cache.filter(member => !member.user.bot).size
let bots = message.guild.members.cache.filter(member => member.user.bot).size
let embed = new MessageEmbed()
.setThumbnail(message.author.avatarURL())
.setTitle("Total Member From Server")
.addField("All Member", all.toString())
.addField("Humans", users.toString())
.addField("Bots", bots.toString())
.setColor("RANDOM")
message.channel.send({embeds: [embed]})
}
});
 
client.on('messageCreate', message => { 
            if(message.content.startsWith(prefix + "")) {
}
})
 
client.on('messageCreate', async message => {  
  if (message.content.startsWith(prefix + "mute")) {
if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply("You Dont Have Permission `MANAGE_CHANNELS`")
 if(!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.reply("I Dont Have Permission `MANAGE_CHANNELS`")
var member = message.mentions.members.first()
const reason = message.content.split(" ").slice(2)
let muterole = message.guild.roles.cache.find(r => r.name === "Mute BlackJack","Muted");
if(!member) return message.reply("Member Not Founded")
    if(!muterole){
    try{
      muterole = await message.guild.roles.create({ name: "Mute BlackJack", reason: "Creating MuteRole" })    
      message.guild.channels.cache.forEach(async (channel, id) => {
        await channel.permissionOverwrites.create(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  member.roles.add(muterole)
let embed = new MessageEmbed()
.setThumbnail(message.author.avatarURL())
.setTitle(`Member Has Been Muted`)
.addField(`Member Muted`, member.toString())
.addField(`Reason`, reason.toString() || `None`)
.addField(`Moderation`,`<@${message.author.id}>`)
.setFooter(`Requested By | ${message.author.tag} `)
message.channel.send({ embeds: [embed]})
} 
});
client.on('messageCreate', async message => {
  
  if (message.content.startsWith(prefix + "unmute")) {
  if(!message.member.permissions.has("MANAGE_ROLES")) return;
  var member = message.mentions.members.first()
  let role = message.guild.roles.cache.find(r => r.name === "Mute BlackJack","Muted")
  if(!member) return (`I Cant Find The Member | *Please Mention Member For Unmute, Usage: b!unmute @BlackJack#1000**`)
  member.roles.remove(role)
  const embed = new MessageEmbed()
  .setTitle("Unmuted Member✅")
  .addField("Name Member", member.toString())
  .addField("Moderation", `<@${message.author.id}>`)
  .setFooter(`Requested By | ${message.author.tag}`)
  message.channel.send({embeds: [embed]})
  }
});
client.on("messageCreate", message => {
if (message.content.startsWith(prefix + "tempmute")) {
if (!message.member.permissions.has("MANAGE_GUILD")) return
let args = message.content.split(" ").slice(1)
let member = message.mentions.members.first() || message.guild.members.cache.get(args.id)
let muterole = message.guild.roles.cache.find(bj => bj.name === "Mute BlackJack")
if(!muterole){
    try{
      muterole = message.guild.roles.create({ name: "Mute BlackJack", reason: "Creating MuteRole" })    
      message.guild.channels.cache.forEach(async (channel, id) => {
        await channel.permissionOverwrites.create(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
}
  let mutetime = args[1]
  if(!mutetime) return message.reply(`Usage: ${prefix}tempmute @Member 10s or 1h or 1d or 1y`)
  member.roles.add(muterole)
  message.channel.send(`<@${member.id}> has been Muted For ${mutetime}`)
  setTimeout(function(){
 
      member.roles.remove(muterole)
      let embed = new MessageEmbed()
      .setTitle("Tempmute is end")
      .setColor("RANDOM")
      .addField("Member UnMuted", member.toString())
      .addField("Moderation", `<@${message.author.id}>`)
      message.channel.send({embeds: [embed]})
    }, ms(mutetime))  
}
});
 
client.on("messageCreate", message => {
if(message.content.startsWith(prefix + "roleadd")) {
if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("You dont Have Permission `MANAGE ROLES`")
if(!message.guild.me.permissions.has("MANAGE_ROLES")) return message.reply("I dont Have Permission `MANAGE ROLES`")
let args = message.content.split(" ").slice(1)
let member = message.mentions.members.first()
let role = message.guild.roles.cache.find(r => r.name === args[0]) || message.mentions.roles.first()
if(!args) return message.channel.send("Please Tag Member And Mention role for Adding Role")
if(!member) return message.reply("Member is Not Founded")
if(!role) return message.reply("Role Is not founded")
member.roles.add(role)
let embed = new MessageEmbed()
.setTitle("Done Role is Add")
.addField("Moderation", `<@${message.author.id}>`)
.addField("Member", member.toString())
.addField("Role", role.toString())
message.channel.send({embeds: [embed]})
}
});
client.on("messageCreate", message => { 
if(message.content.startsWith(prefix + "roleremove")) {
if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("You dont Have Permission `MANAGE ROLES`")
if(!message.guild.me.permissions.has("MANAGE_ROLES")) return message.reply("I dont Have Permission `MANAGE ROLES`")
let args = message.content.split(" ").slice(1)
let member = message.mentions.members.first()
let role = message.guild.roles.cache.find(r => r.name === args[0]) || message.mentions.roles.first()
if(!args) return message.channel.send("Please Tag Member And Mention role for Removing Role")
if(!member) return message.reply("Member is Not Founded")
if(!role) return message.reply("Role Is not founded")
member.roles.remove(role)
let embed = new MessageEmbed()
.setTitle("Done Role is Remove")
.addField("Moderation", `<@${message.author.id}>`)
.addField("Member", member.toString())
.addField("Role", role.toString())
message.channel.send({embeds: [embed]})
}
});
 
 
client.on('messageCreate', async message => {
  
  if (message.content.startsWith(prefix + "lock")) {
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return
      return message.channel.send("**Please Check Your Permissions**");
    message.channel.permissionOverwrites.create(message.guild.id, { SEND_MESSAGES: false })
    .then(() => {
        const embed = new MessageEmbed()
          .setThumbnail(message.author.avatarURL())
          .setTitle("LOCKED CHANNEL")
          .addField("Guild name", message.guild.name)
          .addField("Channel", `${message.channel.name}`)
          .addField("By", `<@${message.author.id}>`, true)
          .setColor("RANDOM")
        message.channel.send({ embeds: [embed]})
      });
  }
})
  client.on('messageCreate', async message => {    
  if (message.content.startsWith(prefix + "unlock")) { 
        if (!message.member.permissions.has("MANAGE_CHANNELS")) return
    message.channel.permissionOverwrites.create(message.guild.id, { SEND_MESSAGES: true })
    .then(() => {
        const embed = new MessageEmbed()
          .setThumbnail(message.author.avatarURL())
          .setTitle("UNLOCKED CHANNEL")
          .addField("Guild name", message.guild.name)
          .addField("Channel", `${message.channel.name}`)
          .addField("By", `<@${message.author.id}>`, true)
          .setColor("RANDOM")
        message.channel.send({ embeds: [embed]})
      });
  }
});
client.on("messageCreate", message => {
  
if (message.content.startsWith(prefix + "ban")) {
if (!message.member.permissions.has("BAN_MEMBERS")) return
let args = message.content.split(" ").slice(1)
let Member = message.mentions.users.first() || message.guild.members.cache.get(args.id)
var Reason = message.content.split(" ").slice(2).join(" ")
if(!args) return message.reply("**Please Mention Member Or Id Member**")
if(!Member) return message.reply("Icant find Member")
message.guild.members.ban(Member,{reason: [Reason]})
let embed = new MessageEmbed()
.setTitle("Banned From The Server✅")
.addField("Member Banned", Member.toString())
.addField("Moderation", message.author.tag)
.addField("Reason", Reason.toString() || `None`)
.setFooter(`Requested By | ${message.author.tag}`)
message.channel.send({ embeds: [embed] })
}
});
client.on("messageCreate", message => {  
if (message.content.startsWith(prefix + "kick")) {
if (!message.member.permissions.has("BAN_MEMBERS")) return
let args = message.content.split(" ").slice(1)
let Member = message.mentions.users.first() || message.guild.members.cache.get(args.id)
var Reason = message.content.split(" ").slice(2).join(" ")
if(!args) return message.reply("**Please Mention Member Or Id Member**")
if(!Member) return message.reply("Icant find Member")
message.guild.members.ban(Member,{reason: [Reason]})
let embed = new MessageEmbed()
.setTitle("Kicked From The Server✅")
.addField("Member Kicked", Member.toString())
.addField("Moderation", message.author.tag)
.addField("Reason", Reason.toString() || `None`)
.setFooter(`Requested By | ${message.author.tag}`)
message.channel.send({ embeds: [embed] })
}
});
 
var warns = require("./warning.json");
function saveWarning() {
    fs.writeFileSync("./warning.json", JSON.stringify(warns, null, 4));
}
client.on("messageCreate", message => {  
if (message.content.startsWith(prefix + "warning")) {
if (!message.member.permissions.has("MANAGE_GUILD")) return
let user = message.mentions.members.first()
let reason = message.content.split(" ").slice(2)
if(!user) return message.reply("Mn natwanm aw kasa bdozmawa")
if(!reason) return message.reply("Tkaya Hokarek bnwsa")
if(!warns[user.id]) warns[user.id] = {
    warns: 0
  };
  warns[user.id].warns++;  
saveWarning()
let embed = new MessageEmbed()
.setTitle("Done Warned✅")
.addField("Member", user.toString())
.addField("Moderation", message.author.tag)
.addField("Reason", reason.toString())
message.channel.send({embeds: [embed]})
 
if(warns[user.id].warns == 2){
let muterole = message.guild.roles.cache.find(c => c.name === "Muted")
let mutetime = "58s"
user.roles.add(muterole)
message.channel.send("Done Have Been Muted")
setTimeout(function(){
 
      user.roles.remove(muterole)
      message.reply(`<@${user.id}> has been unmuted.`)
 
    }, ms(mutetime))  
 
if(warns[user.id].warns == 3){
message.guild.members.ban(user,{reason: [reason]})
message.reply("Band Kra Bahoy Hala Krdn 3 jar")
saveWarning()
}
}}
});
client.on("messageCreate", message => {
if (message.content.startsWith(prefix + "warnlevel")) {
let user = message.mentions.members.first()
if(!user) return message.reply("I cant Find Member")
if(!warns[user.id]) warns[user.id] = {
      warns: 0
    };
 const embed = new MessageEmbed()
    .setColor(0xFFFF01)
    .setTimestamp()
    .addField('Action:', 'Warn Check')
    .addField('User:', user.toString())
    .addField('Number of warnings:', warns[user.id].warns.toString())
    message.channel.send({embeds: [embed]}) 
}
});
 
client.on("messageCreate", message => {  
if (message.content.startsWith(prefix + "temprole")) {
if (!message.member.permissions.has("MANAGE_GUILD")) return
let args = message.content.split(" ").slice(2)
let member = message.mentions.members.first() || message.guild.members.cache.get(args)
let role = message.guild.roles.cache.find(bj => bj.name === args[0]) || message.mentions.roles.first()
if(!role) return message.reply("Role Not Founded")
let mutetime = args[1]
if(!mutetime) return message.reply(`Usage: ${prefix}tempmute @Member 10s or 1h or 1d or 1y`)
  member.roles.add(role)
  message.channel.send(`<@${member.id}> Done Has been RoleAdd ${role} ${mutetime}`)
  setTimeout(function(){
 
      member.roles.remove(role)
      let embed = new MessageEmbed()
      .setTitle("Temprole is end")
      .addField("Member UnMuted", member.toString())
      .addField("Moderation", `<@${message.author.id}>`)
      .addField("Role", role.toString())
      message.channel.send({embeds: [embed]})
    }, ms(mutetime))  
}
});
 
client.on("messageCreate", message => {  
  if (message.content.startsWith(prefix + "unban")) {
  let args = message.content.split(" ").slice(1)
  if(!args) return message.reply("Please Mention Member Or Id")
  var Member = message.mentions.users.first() || message.guild.members.cache.get(args.id)
  message.guild.bans.fetch().then(bans => {
            var Unban = bans.find(m => m.id === args[1]);
            if(!Unban) return message.channel.send(`:no_entry: | <@${message.author.id}> This preson not have any ban from this server! :unlock:`);
            message.guild.members.unban(Member)
            message.channel.send(`:white_check_mark: Successfully UNBANNED ${args} From the server!`);
  })
}})
 
client.on("messageCreate", message => {  
  if (message.content.startsWith(prefix + "setAfk")) {
  if(!message.member.permissions.has("MANAGE_GUILD")) return
  let args = message.content.split(" ").slice(1)
  let channel = message.guild.channels.cache.find(c=> c.name === args[0])
  if(!args) return message.reply("Please Write Name Channel Voice To Setup")
  if(!channel) return message.reply("Channel not Founded")
  message.guild.setAFKChannel(channel)
  let embed = new MessageEmbed()
  .setTitle("Done Setup Channel Afk")
  .addField("Moderation", `<@${message.author.id}>`)
  .addField("Channel Afk", args.toString())
  .setFooter(`Requested By | ${message.author.tag}`)
  message.channel.send({embeds: [embed]})
  } 
});

client.login(process.env.TOKEN_BOT);

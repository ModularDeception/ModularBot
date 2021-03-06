const Discord = require('discord.js');
const Attachment = require("discord.js").Attachment;
const client = new Discord.Client();
const prefix = "m!";
const snekfetch = require('snekfetch');
var ms = require("ms");

function isAdmin(member) {
    return member.hasPermission("ADMINISTRATOR");
}

function isKick(member) {
    return member.hasPermission("KICK_MEMBERS");
}

function isBan(member) {
    return member.hasPermission("BAN_MEMBERS");
}

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setGame(`with m!help`);
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "ping")) {
     message.channel.send('Pong! <:Pingsock:433019097005948938>');
  	}
});

 client.on('message', message => {
  if (message.content.startsWith(prefix + "avatar")) {
     message.reply(message.author.avatarURL);
  }
});

 client.on('message', message => {
  if (message.content.startsWith(prefix + "cookie")) {
  let member = message.mentions.members.first();
  if (!member) 
      return message.reply(`<:what:433000284323840001> I can't give no one a cookie`)
  message.channel.send(message.author.toString() +  ' gave ' + member.toString()  + ' a cookie :cookie:');
  }
});

 client.on('message', message => {
  if (message.content.startsWith(prefix + "help")) {
    const embed = new Discord.RichEmbed()
    .setColor(0x9370db)
    .setAuthor("ModularBot: Help", "https://i.imgur.com/Y9HlaCp.png")
    .setTitle("Command List:")
    .setDescription("Prefix: m!")
    .addField(":grinning: Basic Commands", "Help, Invite")
    .addField(":stuck_out_tongue: Fun Commands", "Ping, Birb, Knight")
    .addField(":fork_knife_plate: Food Commands", "Cookie")
    .addField(":tools: Helpful Commands", "Info, Avatar")
    .setFooter("Thank you for choosing ModularBot")
    .setTimestamp()
    message.channel.send({embed})
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "invite")) {
    message.reply('Invite me to your server friend https://rebrand.ly/ModularBot');
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "info")) {
    const embed = new Discord.RichEmbed()
    .setColor(0x9370db)
    .setAuthor("ModularBot: Info", "https://i.imgur.com/Y9HlaCp.png")
    .setTitle("Info:")
    .setDescription("Have any ideas or would like to help contribute? Email me at .com")
    .addField("Version", "Version 1.2")
    .addField("Creator", "Modular#0001")
    .setFooter("Thank you for choosing ModularBot")
    .setTimestamp()
    .setThumbnail("https://i.imgur.com/Y9HlaCp.png")
    message.channel.send({embed})
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "birb")) {
    const embed = new Discord.RichEmbed()
    .setColor(0x9370db)
    .setAuthor("ModularBot: Birb", "https://i.imgur.com/Y9HlaCp.png")
    .setImage("https://random.birb.pw/tweet/random")
    .setFooter("Powered by random.birb.pw")
    .setTimestamp()
    message.channel.send({embed})
  }
});

 client.on('message', message => {
  if (message.content.startsWith(prefix + "knight")) {
  let member = message.mentions.members.first();
  if (!member) 
      return message.reply(`<:what:433000284323840001> I can't knight no one`)
  message.channel.send( ':crossed_swords: ' + member.toString()  + ' has been knighted :crossed_swords:');
  }
});


client.login(process.env.BOT_TOKEN);

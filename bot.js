const Discord = require('discord.js');
const Attachment = require("discord.js").Attachment;
const client = new Discord.Client();
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

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
     message.reply('Pong! :ping_pong:');
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
      return message.reply("I can't give no one a cookie")
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
    .addField(":grinning: Basic Commands", "Help, Ping, Invite")
    .addField(":stuck_out_tongue: Fun Commands", "Cookie")
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

client.on("message", async message => {
 if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
    message.channel.send(sayMessage);
  }
}
          
client.login(process.env.BOT_TOKEN);

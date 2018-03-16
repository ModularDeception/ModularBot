const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "m!";

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setGame(`with m!help`);
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "ping")) {
    message.reply('Pong!');
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
    .addBlankField(true)
    .addField(":grinning: Basic Commands", "Help, Ping, Invite")
    .addBlankField(true)
    .addField(":stuck_out_tongue: Fun Commands", "Cookie")
    .addBlankField(true)
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
        
client.login(process.env.BOT_TOKEN);

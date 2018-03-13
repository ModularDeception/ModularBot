const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "m!";
const embed = new Discord.RichEmbed()

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "ping")) {
    	message.reply('pong');
  	}
});

 client.on('message', message => {
  if (message.content.startsWith(prefix + "avatar")) {
    message.reply(message.author.avatarURL);
  }
});

 client.on('message', message => {
  if (message.content.startsWith(prefix + "cookie")) {
    message.reply('Have a cookie :cookie:');
  }
});

 client.on('message', message => {
  if (message.content.startsWith(prefix + "help")) {
    .setColor(FFC0CB)
    .setTitle("Command List:")
    .addField("m!help", "Shows command list")
    .addField("m!cookie", "Gives you a cookie :3")
    .addField("m!ping", "Gives you a pong to your ping")
    .addField("m!avatar", "Shows your avatar")
    message.channel.send({embed})
  }
});


client.login(process.env.BOT_TOKEN);

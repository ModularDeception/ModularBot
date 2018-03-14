const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "m!";
const user_id = evt.message.author.id;

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
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setTitle("Command List:")
    .addField("m!help", "Shows command list")
    .addField("m!cookie", "Gives you a cookie :3")
    .addField("m!ping", "Gives you a pong to your ping")
    .addField("m!avatar", "Shows your avatar")        
    .addField("m!invite", "Gives you the invite link to add me to your server")
    message.channel.send({embed})
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "invite")) {
    message.reply('Invite me to your server senpai :3 https://rebrand.ly/ModularBot');
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "react")) {
    message.react('🦆') 
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "pizza")) {
   if(!m.mentions[0]) {
				message.reply("Missing User!");
					return
				}						
	user = m.mentions[0]
    message.channel.send(user_id + 'gave ' user + ' a piece of pizza :pizza:)
  }
});

client.login(process.env.BOT_TOKEN);

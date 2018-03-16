const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "m!";

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({ game: { name: 'with depression' }, status: 'online' })
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
  message.channel.send('${message.author.tag} gave ${member.user.tag} a cookie :cookie:');
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

client.login(process.env.BOT_TOKEN);

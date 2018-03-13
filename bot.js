const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'm!avatar') {
    	message.reply('pong');
  	}
});
client.on('ready', () => {
  console.log('I am ready!');
});

 client.on('message', message => {
  if (message.content === 'm!avatar') {
    message.reply(message.author.avatarURL);
  }
});

 client.on('message', message => {
  if (message.content === 'm!cookie') {
    message.reply('Have a cookie :cookie:');
  }
});

client.login(process.env.BOT_TOKEN);

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

message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    fields: [{
        name: "Fun Commands",
        value: "cookie, avatar, ping"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Example"
    }
  }
});

client.login(process.env.BOT_TOKEN);

// Load up the discord.js library
const Discord = require("discord.js");
const Attachment = require("discord.js").Attachment;
var ms = require("ms");

var welcomerole = false;

// This is your client. Some people call it `bot`, some people call it `self`,
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();
// config.token contains the bot's token
// config.prefix contains the message prefix.

function isAdmin(member) {
    return member.hasPermission("ADMINISTRATOR");
}

function isKick(member) {
    return member.hasPermission("KICK_MEMBERS");
}

function isBan(member) {
    return member.hasPermission("BAN_MEMBERS");
}

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});

// client.on("guildmemberadd", guild => {
//   if (welcomerole == false) {
//
//   }
//   else {
//     // Give a role to a member
// user.addRole(welcomerole)
//   .then(console.log)
//   .catch(console.error);
//   }
// });

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});


client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.

  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;

  // Also good practice to ignore any message that does not start with our prefix,
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // if (command === "welcomerole") {
  //   // makes the bot say something and delete the message. As an example, it's open to anyone to use.
  //   // To get the "message" itself we join the `args` back into a string with spaces:
  //   const sayMessage = args.join(" ");
  //
  //   try {
  //     // Give a role to a member
  //     message.channel.guild.roles.exists("name", sayMessage);
  //     welcomerole = sayMessage;
  //   }
  //   catch (e) {
  //     message.channel.send(`Sorry, that is not a valid role.`);
  //     welcomerole = false;
  //   }
  // }

  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Speed is ${m.createdTimestamp - message.createdTimestamp}ms. API speed is ${Math.round(client.ping)}ms`);
  }

  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
    message.channel.send(sayMessage);
  }
  if (command === "clear") { // This time we have to use startsWith, since we will be adding a number to the end of the command.
        // We have to wrap this in an async since awaits only work in them.
        const number = args.join(" ");
        async function purge() {
            message.delete();
            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                message.channel.send('You need the \`Manage Messages\` permission to use this command.');
                return;
            }

            if (isNaN(number)) {
                message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>');
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: number});

            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`));

        }
        try {
          purge();
        }
        catch (e) {
          console.log(e);
        }
  }

  if(command === "server"){
    message.channel.send(`https://discord.gg/yuSHrjr`);
  }

  if(command === "bigtext") {
    var contains = function(needle) {
        // Per spec, the way to identify NaN is that it is not equal to itself
        var findNaN = needle !== needle;
        var indexOf;

        if(!findNaN && typeof Array.prototype.indexOf === 'function') {
            indexOf = Array.prototype.indexOf;
        } else {
            indexOf = function(needle) {
                var i = -1, index = -1;

                for(i = 0; i < this.length; i++) {
                    var item = this[i];

                    if((findNaN && item !== item) || item === needle) {
                        index = i;
                        break;
                    }
                }

                return index;
            };
        }

        return indexOf.call(this, needle) > -1;
    };
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const sayMessage = args.join(" ");
    let messageSend = "";
    for (let i = 0; i < sayMessage.length; i++) {
      if (sayMessage.charAt(i) !== " ") {
        if (contains.call(list, (sayMessage.charAt(i).toLowerCase()))){
          messageSend = messageSend + " :regional_indicator_" + sayMessage.charAt(i).toLowerCase() + ":";
        }
      }
      else {
        messageSend = messageSend + "    ";
      }
    }
    // And we get the bot to say the thing:
    message.channel.send(messageSend);
  }

  if(command === "mention") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    try {
      message.channel.send(client.users.find('username', sayMessage).toString());
    }
    catch(e) {
      message.channel.send("Sorry, that is not a valid username! Check to make sure you didn't make any spelling mistakes.");
    }
    // And we get the bot to say the thing:
  }

  if(command === "announce") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    message.channel.send(`<@everyone> ` + sayMessage);
    // And we get the bot to say the thing:
  }



  if(command === "kick") {
    if(!message.member.hasPermission("KICK_MEMBERS")) {
        return message.reply("Sorry, you don't have permissions to use this.");
    }

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("That user does not exist.");
    if(!member.kickable)
      return message.reply("User was not kicked. Make sure that I have kick members permissions, and that the user is kick able.");
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the kick.");
    try {
      message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
    }
    catch (e) {
      console.log(e);
    }
    try {
      message.mentions.members.first().user.sendMessage("You have been kicked from "+ message.channel.guild.name + ". Remember you can still join back with an invite link!");
    }
    catch (e) {
      console.log(e);
    }
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
  }

  if(command === "ban") {
    if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.reply("Sorry, you don't have permissions to use this.");
    }

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("That user does not exist.");
    if(!member.bannable)
      return message.reply("User was not banned. Make sure that I have ban members permissions, and that the user is ban able.");
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban.");
    try {
      message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
    }
    catch (e) {
      console.log(e);
    }
    try {
      message.mentions.members.first().user.sendMessage("You have been banned from "+ message.channel.guild.name + ". You cannot join unless you are unbanned.");
    }
    catch (e) {
      console.log(e);
    }
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
  }

  if(command === "unban") {
    if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.reply("Sorry, you don't have permissions to use this.");
    }

    const sayMessage = args.join(" ");
    let bansd;
    message.guild.fetchBans()
      .then(bans => {
        console.log(bans);
        let id = bans.find(function(element) {
          console.log(element.username + " is " + (element.username==sayMessage));
          return element.username == sayMessage;
        });
        if (id == null) {
          message.reply(`User is not banned.`);
        }
        else {
          console.log(id);
          message.guild.unban(id)
            .then(user => message.reply(`Unbanned ${user.username} from ${message.guild}`))
            .catch(console.error);
          }

        })
        .catch(console.error);
  }

  if (command === "mute") {
      const sayMessage = args.join(" ");
      if(!message.member.hasPermission("KICK_MEMBERS")) {
          return message.reply("Sorry, you don't have permissions to use this.");
      }

      let member = message.mentions.members.first();
      if (!member) return message.reply("That isn't a user.");
      let muteRole = message.guild.roles.find("name", "Muted");
      if(!muteRole) return msg.reply("You haven't configured the Muted role yet. Please go to roles, and add Muted as a role. In 'Muted''s permissions, disable send messages.");
      let params = message.content.split(" ").slice(1);
      let time = params[1];
      if (!time) return message.reply(`There is no time specified. Please use this command in the form of ${config.prefix}`)

      member.addRole(muteRole.id);
      message.channel.send(`You have been muted for ${ms(ms(time), {long:true})} ${member.user.tag}`);

      setTimeout(function(){
        member.removeRole(muteRole.id);
        message.channel.send(`${member.user.tag} has been unmuted.`);
      }, ms(time));
  }

  if (command === "gayray") {
    message.channel.send();
   const filter = response => ((response.author.id != "421686551261741056"));

  message.channel.send(`Person below triple hella quadruple gay
AND, if they delete their message they are permanently gay, and will be reminded of that.
AND, this message can't be deflected.
AND, all cards and comebacks are null against this, and it gives you Autism Vaccines®
AND, no amount of emojis can block the GayRay®
|
|
V`).then(() => {
      message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
          .then(collected => {
            console.log(collected.first().author);
              message.channel.send(`${collected.first().author} has the gay!`)
              collected.first().member.setNickname('Hella Gay Man')
              .then(console.log())
              .catch(console.error);
          })
          .catch(collected => {
              message.channel.send('Looks like no one is gay. Bye you str8 people.');
          });
  });
  }

  if (command === "unmute") {
      const sayMessage = args.join(" ");
      if(!message.member.hasPermission("KICK_MEMBERS")) {
          return message.reply("Sorry, you don't have permissions to use this.");
      }

      let member = message.mentions.members.first();
      if (!member) return message.reply("That isn't a user.");
      let muteRole = message.guild.roles.find("name", "Muted");
      if(!muteRole) return msg.reply("You haven't configured the Muted role yet. Please go to roles, and add Muted as a role. In 'Muted''s permissions, disable send messages.");

      member.removeRole(muteRole.id);
      message.channel.send(`${member.user.tag} has been unmuted.`);
  }

  if (command === "meme" || command === "memes") {
    var highest = 21;
    var url = "https://www.sheshank.com/memes/" + Math.floor((Math.random() * highest) + 1) + ".jpg";
    const embed = new Discord.RichEmbed()
    .setImage(url);
     message.channel.send({embed});
  }

  if (command === "mock") {
    const sayMessage = args.join(" ");
    let a = "";
    for (var i = 0; i < sayMessage.length; i++) {
      if (i%2 == 0) {
        a = a + sayMessage.charAt(i).toLowerCase();
      }
      else {
        a = a + sayMessage.charAt(i).toUpperCase();
      }
    }
     message.channel.send(a);
  }

  if (command === "invite") {
   message.channel.send(`You can invite me with this link: https://discordapp.com/oauth2/authorize?client_id=421686551261741056&scope=bot`);
  }

  if (command === "kill" || command === "die") {
    var listOfRoasts = [
      "You died of dysentery",
      "no u",
      "no u",
      "no u"
    ];
    let member = message.mentions.members.first();
    if (!member) return message.reply("I can't roast someone that isn't a person smh.");
    let rand = Math.floor((Math.random() * (listOfRoasts.length-1)) + 1);
    if (listOfRoasts[rand] == "no u") {
      message.channel.send(listOfRoasts[rand]);
    }
    else {
      message.channel.send(member.toString() + " " + listOfRoasts[rand]);
    }
  }

  if (command === "roast" || command === "insult") {
    var listOfRoasts = [
      "Shut up, you'll never be the man your mother is.",
      "You're a failed abortion whose birth certificate is an apology from the condom factory.",
      "You must have been born on a highway, because that's where most accidents happen.",
      "Your family tree is a cactus, because everybody on it is a prick.",
      "You're so ugly Hello Kitty said goodbye to you.",
      "You are so ugly that when your mama dropped you off at school she got a fine for littering.",
      "It looks like your face caught on fire and someone tried to put it out with a fork.",
      "Do you have to leave so soon? I was just about to poison the tea.",
      "Your so ugly when you popped out the doctor said aww what a treasure and your mom said yeah lets bury it",
      "We all sprang from apes, but you didn't spring far enough.",
      ", you are the equivalent of a gential piercing",
      "when I think of you, I think of world hunger, children dying, and paralyzed soldiers",
      " tried to donate his hair to children with cancer. They said \“don’t we got enough problems now you want us to look like fags\”",
      "you remind me of a middle aged man who just got a divorce. You sit in your room playing on your computer noodling around with these bots when all you’re doing is reminding yourself of how much a complete and utter failure you are.",
      "why are you hanging out with teenagers? Shouldn’t you be at the nursing home playing shuffleboard with your 80 year old girlfriend?",
      "Your life is like a steak at a vegan resteraunt. It doesn’t cross the place",
      "no u",
      "no u",
      "no u",
      "What’s the difference between you and a brain tumor? You can get a brain tumor removed.",
      "is so ugly her face was shut down by the health department.",
      "is so ugly that when she met the Kardashians they thought she was a fourth grader with cancer.",
      "is so poor she waves around a popsicle and calls it air conditioning.",
      "You're an example of why animals eat their young.",
      "I would shoot you but that would be disrespectful to the bullet",
      "You’re so fat that when you step on a scale it says \“I need your weight not your phone number\”"
    ];
    let member = message.mentions.members.first();
    if (!member) return message.reply("I can't roast someone that isn't a person smh.");
    let rand = Math.floor((Math.random() * (listOfRoasts.length-1)) + 1);
    if (listOfRoasts[rand] == "no u") {
      message.channel.send(listOfRoasts[rand]);
    }
    else {
      message.channel.send(member.toString() + " " + listOfRoasts[rand]);
    }
  }

  if (command === "pickup") {
    var listOfRoasts = [
      "8 Planets, 1 Universe, 1.735 billion people, and i end up with you",
      "I’m going to have to ask you to leave. You’re making the other girls look bad.",
      "Do you have 11 protons? Because you’re sodium fine!",
      "You know what’s on the menu? ME-N-U.",
      "Are you an omelette? Because you’re making me eggcited.",
      "Are you a bank loan? Because you got my interest.",
      "Are you the square root of -1 because you can’t be real.",
      "Are you from mexico because i think you’re the juan for me!",
      "Are u a sea lion? Because I want to sea u lion in my bed later!",
      "Is your face Mcdonalds? Cause im lovin it!",
      "You like maths? Cause I want to ADD to you my life, SUBTRACT your clothes, DIVIDE your legs and MULTIPLY ourselves.",
      "Are you harambe's enclosure? Cause i’ll drop a kid inside of you!",
      "Is your name Daniel? Cause DAMN!",
      "Is your dad retarded? Because you’re special",
      "If Internet Explorer is brave enough to ask you to be your default browser, I’m brave enough to ask you out!"
    ];
    let member = message.mentions.members.first();
    if (!member) return message.reply("I can't pick up no one?");
    let rand = Math.floor((Math.random() * (listOfRoasts.length-1)) + 1);
    message.channel.send(member.toString() + " " + listOfRoasts[rand]);
  }
  // if(command === "google") {
  //   const sayMessage = args.join(" ");
  //
  //   let img = gd.createFromPng('./google.png');
  //   img.stringFT(img.colorAllocate(260, 0, 0), './Roboto-Regular.ttf', '10px', '90', '10', '10', 'testestsetse', false);
  //   img.saveJpeg('./google1.jpg', 100, function(error) {
  //     if (error) {
  //       throw error;
  //     }
  //     img.destroy();
  //   });
  //   message.channel.send({ files: [new Attachment('./google1.png', 'google.png')] });
  //
  //   img.destroy();
  // }

  if(command === "help") {
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      description: "Everything bot, does literally everything. Here is the list of commands, and you can request a new command, by emailing sheshank@sheshank.com",
      fields: [{
          name: ":straight_ruler:  Admin/Mod",
          value: "clear, kick, ban, unban, mute, unmute, addrole, removerole, turnoffcommand, turnoncommand"
        },
        {
          name: ":laughing: Fun commands",
          value: "meme, pickup, insult, joke, mock, pun, shitpost, kill, hug, tickle, kiss, punch, gayray"
        },
        {
          name: ":camera_with_flash: Image commands",
          value: "speechbubble, textcomic, google"
        },
        {
          name: ":regional_indicator_t: :regional_indicator_e: :regional_indicator_x: :regional_indicator_t:  commands",
          value: "ping, say, bigtext, picturetext, mention, announce, invite, server"
        }
      ],
      timestamp: new Date(),
      footer: {
        text: "(Thanks to Popestar#0545 for most of the insults.)"
      }
    }
  });

  }
});

client.login(proccess.env.BOT_TOKEN);

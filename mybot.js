+//Get discord.js
 +const Discord = require('discord.js');
 +
 +//Create client instance as bot
 +const botRem = new Discord.Client();
 +
 +//Set listener on 'ready'
 +botNep.on('ready', () => {
 +  console.log('Nep ready!');
 +  });
 +  
 +  //Set listener on 'message'
 +  botNep.on('message', message => {
 +   if (message.content === 'พุดดิ้ง!!') {
 +   message.reply('พุดดิ้ง! พุดดิ้ง!');
 +     }
 +  });
 +  
 +  botNep.login('Mjc3Nzg5MzgzNDgwODM2MDk2.C3i3DQ.0R_Nmv9VWZgl3LTdruV7nhBAPzk');

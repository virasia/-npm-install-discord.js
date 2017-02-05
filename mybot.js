const Discord = require('discord.js');

const botNeptune = new Discord.Client();

botNeptune.on('ready', () => {
 console.log('Neptune ready!');
  });
  
 botNep.on('message', message => {
   if (message.content === 'พุดดิ้ง!!') {
   message.reply('พุดดิ้ง! พุดดิ้ง!');
    }
 });
 
 botNeptune.login('Mjc3Nzg5MzgzNDgwODM2MDk2.C3jFxw._SHqPQGV4jL_Hp5sqLjqwDDAPpA');

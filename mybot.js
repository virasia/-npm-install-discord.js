const Discord = require('discord.js');
const botNep = new Discord.Client();
botNep.on('ready', () => {
 console.log('Nep ready!');
  });
  
 botNep.on('message', message => {
   if (message.content === 'พุดดิ้ง!!') {
   message.reply('พุดดิ้ง! พุดดิ้ง!');
    }
 });
 
 botNep.login('Mjc3Nzg5MzgzNDgwODM2MDk2.C3jCMA.-dCxSt4U44JvxAlbdMxifUT5WyE);

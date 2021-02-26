//O comando abaixo ira simular uma conquista do minecraft

const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = async (client, message, args) => {
 try {
 const text = args.join(" ");
 if (text === null) return message.channel.send("Escreva uma conquista.");
 if (text.length > 25) return message.reply('Sua conquista passou de 25 caracteres.');
 const superagent = require('superagent')
 const { body } = await superagent
 .get('https://www.minecraftskinstealer.com/achievement/a.php')
 .query({
 i: 1,
 h: 'Conquista desbloqueada!',
 t: text
 });
 message.channel.send({ files: [{ attachment: body, name: 'achievement.png' }] 
 });
 } catch (err) {
 console.log(err)
 }
}
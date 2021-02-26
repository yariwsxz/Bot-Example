//o comando abaixo será para mostrar o seu level

const Discord = require('discord.js');

exports.run = async (client, message, args, database) => {
  let amigo = message.mentions.users.first() || message.author;
  database.ref(`Servidores/Levels/${message.guild.id}/${amigo.id}`).once('value').then(async function(snap) {
    let nivel = snap.val().level;
    let xp = snap.val().xp;
    proximonvl = snap.val().level * 500;
    let embed = new Discord.MessageEmbed()
    .setTitle(':frame_photo: Level :frame_photo:')
    .setFooter("Bot-Teste")
    .addField(':adult: Membro :adult: ', amigo)
    .addField(':star: Nível :star: ', nivel, true)
    .addField(':sparkles: XP :sparkles: ', xp + '/' + proximonvl, true)
    .setTimestamp()
    .setColor('RANDOM')
     .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
    message.channel.send(embed)
  })  
}
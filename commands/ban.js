const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply('Você precisa de permissão de "BANIR MEMBROS" para utilizar esse comando')
  const guild = message.guild;
  const user = message.mentions.users.first();
  if(!user) {
    return message.reply('Mencione um membro para banir!')
  }
  const motivo = args.slice(1).join(' ');
  if(!motivo) {
    return message.reply('Especifique o motivo do banimento!')
  }
  const staff = message.author;
    if(user === staff) {
    return message.reply('Você não pode usar o ban em si mesmo!')
  }
  let embed = new Discord.MessageEmbed()
  .setTitle('Ban!')
  .setColor('RANDOM')
  .setTimestamp()
  .setThumbnail(message.author.avatarURL())
  .addField('Membro banido:', user)
  .addField('Motivo:', motivo)
  .addField('Staff:', staff)
  message.channel.send(embed)
  guild.members.ban(user);
}
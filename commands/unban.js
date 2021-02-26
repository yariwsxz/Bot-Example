//O comando abaixo servira para desbanir um membro de seu servidor

const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let guild = message.guild;
  let idban = args[0];
  if(!idban) {
    return message.reply('O ID indicado não foi encontrado na lista de banidos ou não foi especificado.')
  }
  let membro = `<@${idban}>`
  let staff = message.author;
  let embed = new Discord.MessageEmbed()
  .setTitle('Unban!')
  .addField('Membro desbanido:', membro)
  .addField('Staff:', staff)
  .setDescription('Você foi perdoado, não volte a quebrar as regras!')
  .setColor('RANDOM')
  await message.channel.send(embed)
  guild.members.unban(idban)
}
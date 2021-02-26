//O comando abaixo ira mostrar o icone do seu servidor
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  let icone = message.guild.iconURL();
  let embed = new MessageEmbed()
  .setTitle('Ícone do servidor!')
  .setImage(icone)
  .setColor('RANDOM')
  .setFooter('Comando requisitado por: ' + message.author.username)

  message.channel.send(embed)
}
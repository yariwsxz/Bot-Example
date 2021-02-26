//O comando abaixo ira mostrar as informações do servidor

const Discord = require('discord.js')
const moment = require('moment')
moment.locale('pt-br')

module.exports = {

  run: function (client, message, args) {
    const date = message.guild.createdAt
    const joined = message.member.joinedAt

    const region = {
      brazil: ':flag_br: Brazil'
    }

    const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setThumbnail(message.guild.iconURL())
      .setTitle('Informações do servidor')
      .addField('`Nome`', message.guild.name)
      .addField('`Dono(a)`', `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
      .addField('`ID`', message.guild.id)
      .addField('`Membros`', message.guild.members.cache.size, true)
      .addField('`Canais`', message.guild.channels.cache.size + ' canais.', true)
      .addField('`Cargos`', message.guild.roles.cache.size + ' cargos.', true)
      .addField('`Criado em`', formatDate('DD/MM/YYYY, às HH:mm:ss', date))
      .addField('`Você entrou em`', formatDate('DD/MM/YYYY, às HH:mm:ss', joined))
      .setTimestamp()
    message.channel.send(embed)
  },
  conf: {},
  get help () {
    return {
      name: 'serverinfo',
      category: 'Info',
      description: 'Informação sobre o servidor',
      usage: 'serverinfo'
    }
  }
}

/**
 * Formata a data passada para o padrão do Brasil.
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}
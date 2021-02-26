//esse sera o comando de userinfo, para mostrar as informações do usuario do servidor

const Discord = require('discord.js')

const moment = require('moment')
moment.locale('pt-br')

module.exports = {

  run: function (client, message, args) {
    const inline = true
    const status = {
      online: ' `🟢` Online',
      idle: ' `🟠` Ausente',
      dnd: ' `🔴` Não pertubar',
      offline: ' `⚫️` Offline'
    }

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
    const target = message.mentions.users.first() || message.author
    const bot = member.user.bot ? '`🤖` Sim' : ' `🙂` Não'

    const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor('Informações do usuário')
      .addField('`Tag`', `${member.user.tag}`, inline)
      .addField('`ID`', member.user.id, inline)
      .addField('`Nickname`', `${member.nickname !== null ? `Nickname: ${member.nickname}` : 'Nenhum'}`, true)
      .addField('`Bot`', `${bot}`, inline, true)
      .addField('`Status`', `${status[member.user.presence.status]}`, inline, true)
      .addField('`Jogando`', `${member.user.presence.game ? `${member.user.presence.game.name}` : ' Nada'}`, inline, true)
      .addField('`Cargos`', `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => roles).join(' **|** ') || 'Nenhum cargo'}`, true)
      .addField('`Entrou no Discord em`', formatDate('DD/MM/YYYY, às HH:mm:ss', member.user.createdAt))
      .addField('`Entrou no servidor em`', formatDate('DD/MM/YYYY, às HH:mm:ss', member.joinedAt))
      .setFooter(`2020 © ${client.user.username}`)
      .setThumbnail((message.author.displayAvatarURL({ dynamic: true, format: 'png'})))
      .setTimestamp()
    message.channel.send(embed)
  },
  conf: {},

  get help () {
    return {
      name: 'userinfo',
      category: 'Info',
      description: 'Mostra informações sobre o usuário.',
      usage: 'userinfo'
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
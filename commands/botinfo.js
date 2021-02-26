//O comando abaixo ira mostrar as informações do seu bot

const Discord = require('discord.js')
const moment = require('moment')

moment.locale('pt-br')

module.exports = {
  run: function (client, message, args) {
    const inline = true
    const botAvatar = client.user.displayAvatarURL
    const date = client.user.createdAt
    const userName = client.user.username
    const servsize = client.guilds.size
    const usersize = client.users.size
    const status = {
      online: '`🟢` Online',
      offline: '`⚫` Offline'
    }
    const m = message.channel.send('Botinfo?')
    
    let dias = 0;
    let semanas = 0;
 
     let uptime = ``;
     let totalSegundos = (client.uptime / 1000);
     let horas = Math.floor(totalSegundos / 3600);
     totalSegundos %= 3600;
     let minutos = Math.floor(totalSegundos / 60);
     let segundos = Math.floor(totalSegundos % 60);
 
     if (horas > 23){
         dias = dias + 1;
         horas = 0;
     }
 
     if (dias == 7) { 
     dias = 0;
     semanas = semanas + 1;
     }
 
     if (semanas > 0){
         uptime += `${semanas} semanas, `;
     }
 
     if (minutos > 60){
         minutos = 0;
     }
 
     uptime += `${dias} Dias, ${horas} Horas, ${minutos} Minutos, ${segundos} Segundos`;

    const embed = new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setColor('RANDOM')
      .setTitle('Minhas informações')
      .addField('`Meu nick`', userName)
      .addField('`Meu ID`', client.user.id)
      .addField('`Servidores`', 'Estou em ' + client.guilds.cache.size + ' servidores', true)
      .addField('`Usuários`', client.users.cache.size + ' usuários', inline)
      .addField('`Criado em`', formatDate('DD/MM/YYYY, às HH:mm:ss', date))
      .addField('`Estou online a`', uptime)
      .addField('`Latência de API`', Math.round(client.ws.ping) + `ms`, true)
      .addField('`Latência de Server`', m.createdTimestamp - message.createdTimestamp + 'ms', true)
      .setTimestamp()

    if (client.user.presence.status) {
      embed.addField(
        '`Status`',
        `${status[client.user.presence.status]}`,
        inline,
        true
      )
    }

    message.channel.send(embed)
},

  conf: {},

  get help () {
    return {
      name: 'botinfo',
      category: 'Info',
      description: 'Mostra informações do bot.',
      usage: 'botinfo'
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
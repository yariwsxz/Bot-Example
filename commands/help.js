//Comando abaixo ira mostrar todos os comandos de seu bot, basta apenas colocalos na lista abaixo

const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {

  let user = message.author;

     const ajuda = new Discord.MessageEmbed()
     .setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
     .setTimestamp()
     .setTitle("comandos!")
     .setColor('RANDOM')
     .setDescription("Coloque sua reação, de acordo com a categoria nescessária \n\nEmoji 1 aqui - Comandos de ... \n Emoji 2 aqui - Comandos de ...\n Emoji 3 aqui - Comandos de ...")
 
   message.channel.send(ajuda).then(msg => {
       msg.react('Emoji 1 aqui').then(r => {
       msg.react('Emoji 2 aqui').then(r => {
       msg.react('Emoji 3 aqui').then(r => {
       })
       })
       })
      const algoFilter = (reaction, user) => reaction.emoji.name === 'Emoji 1 aqui' && user.id === message.author.id;
      const algo2Filter = (reaction, user) => reaction.emoji.name === 'Emoji 2 aqui' && user.id === message.author.id;
      const algo3Filter = (reaction, user) => reaction.emoji.name === 'Emoji 3 aqui' && user.id === message.author.id;
 
      const algo = msg.createReactionCollector(algoFilter);
      const algo2 = msg.createReactionCollector(algo2Filter);
      const algo3 = msg.createReactionCollector(algo3Filter);
      

      algo.on('collect', r2 => {
        ajuda.setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
        ajuda.setTitle("Comandos de ...")
        ajuda.setDescription('Seus comandos aqui')
        ajuda.setTimestamp()
        msg.edit(ajuda)
      })
        algo2.on('collect', r2 => {
        ajuda.setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
        ajuda.setColor('RANDOM')
        ajuda.setTitle("Commandos de ...")
        ajuda.setDescription('Seus comandos aqui')
        ajuda.setTimestamp()
        msg.edit(ajuda)
      })
      algo3.on('collect', r2 => {
        ajuda.setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
        ajuda.setTitle("Comandos de ...") 
        ajuda.setDescription('Seus comandos aqui')
        ajuda.setTimestamp()
        msg.edit(ajuda)
      })
})
} //coloque seus comandos em "Seus comandos aqui"
//coloque o titulo daquela parte de comandos em "Comandos de ..."
//coloque os emojis de reação em "Emoji (numero) aqui..."
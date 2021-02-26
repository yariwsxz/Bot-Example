//abaixo será o comando de AFK, a continuação da index.js

const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'afk',
    run : async(client, message, args) => {
        const content = args.join(" ")
        await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
        const embed = new MessageEmbed()
        .setDescription(`Você colocou o status de afk \n**Motivo :** ${content}`)
        .setColor("GREEN")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        message.channel.send(embed)                
    }
}
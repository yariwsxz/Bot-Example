// O comando abaixo será para mostrar os maiores levels do servidor!

const Discord = require('discord.js');
const meuSet = new Set();
exports.run = async (client, message, args, database) => {
    let amigo = message.mentions.users.first() || message.author;
    const db = await database.ref(`Servidores/Levels/${message.guild.id}`).once('value');
    const array = Object.keys(db.val());
    
    array.forEach((e) => { 
        let infoMembro = {
            id: `${e}`, level: db.val()[e].level, xp: db.val()[e].xp
        };
        meuSet.add(infoMembro)
    });

     let pe = Array.from(meuSet);
     let xy = pe.sort(function (a, b) {
         if (a.xp < b.xp) {
           return 1;
         }
         if (a.xp > b.xp) {
           return -1;
         }
         return 0;
     });

     let suaPosicao;
     xy.forEach(async function (membro, indice){
         if (membro.id == message.author.id) {
             suaPosicao = `Sua posição: **#${indice+1}**.`
         }
     })
     let x = [];

     if (xy.length >= 10) {
         for (y = 0; y < 10; y++) {
             let level = xy.slice(y, y+1).map(a => a.level);
             let id = String(xy.slice(y, y+1).map(a => a.id));
 
             x += `**${y+1}**. ${client.users.cache.get(id).tag} [Level: ${level}].\n`
         }
     } else {
         for (y = 0; y < xy.length; y++) {
              let xp = xy.slice(y, y+1).map(a => a.xp);
             let level = xy.slice(y, y+1).map(a => a.level);
             let id = xy.slice(y, y+1).map(a => a.id);
 
             x += `**${y+1}**. <@${String(id)}> Level: **${level}** / ${xp}xp.\n`
         }
     }
 
     const embed = new Discord.MessageEmbed()
     .setAuthor(`Confira as pessoas com mais níveis, ${message.author.tag}`, message.author.avatarURL())
     .setDescription(`${x}\n${suaPosicao}`)
     .setFooter("Bot-Teste")
     .setColor("RANDOM");
     message.channel.send(embed);
 
     meuSet.clear();
}
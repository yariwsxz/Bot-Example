const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 var respostas = [
 "Sim.",
 "Não",
 "Talvez.",
 "Meu informante disse que não.",
 "Nem quero saber.",
 "Não sei lhe dizer.",
 "Claro que sim!",
 "Dependendo, acho que sim.",
 "Isso nunca saberemos.",
 "Realmente eu não sei.",
 "Suspeito que sim."
 ];
 
 var randres = respostas[Math.floor(Math.random() * respostas.length)];

 var pergunta = args.join(' ');
 if(!pergunta) {
   return message.reply('Faça sua pergunta!')
 }

 var avatar = message.author.displayAvatarURL({ dynamic: true, format: 'png'});

 let embed = new Discord.MessageEmbed()
 .setTitle('8Ball!')
 .setDescription(`Dúvida de: \n${message.author}`)
 .setColor('RANDOM')
 .setThumbnail(avatar)
 .setTimestamp()
 .addField('Questão 📝:', pergunta)
 .addField('Resposta 📃:', randres)
 .setImage('https://www.imagensanimadas.com/data/media/562/linha-imagem-animada-0015.gif')
 .setFooter(`2020 © ${client.user.username}`);

 message.channel.send(embed)
}
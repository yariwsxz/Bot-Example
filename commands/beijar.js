//O comando abaixo serve para você dar um beijo em algum membro de seu servidor (lembrando que o beijo, pode servir para fazer outros tipos de comandos, como por exemplo o comandod e tapa, e eu vou explicar aqui como faz isso!)

const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  var list = [
    'https://cdn.discordapp.com/attachments/785941809524244490/790302236932702259/7a884d462ca5f72deb707496ef6fdf82.gif',
    'https://i.pinimg.com/originals/62/ab/24/62ab2495660d7c9ce3ed685263ffad9d.gif',
    'https://pa1.narvii.com/6407/a86e88ebb9eba428de6981e6bab6b9ac4579d9be_hq.gif',
    'https://i.imgur.com/O49C3HS.gif',
    'https://data.whicdn.com/images/296167142/original.gif',
    'https://media1.tenor.com/images/0a5a1b7d6e2092eb0982fdebdeccbedb/tenor.gif?itemid=16254561'
  ];//Acima estão os gifs que o bot ira mandar, caso você queira fazer um comando de tapa por exemplo, você ira apenas trocar os gifs de beijo, para de tapa!

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first();
let user1 = message.author;
if (!user) {
return message.reply('Lembre-se que você não pode beijar a parede!');//caso você for mudar para outro tipo de comando, mude essa mensagem também
}
if(user === user1) {
  return message.reply('Você não pode se beijar! Mencione outra pessoa!')//caso você for mudar para outro tipo de comando, mude essa mensagem também
}

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Beijo!')//caso você for mudar para outro tipo de comando, mude essa mensagem também
        .setColor('RANDOM')
        .setDescription(`💋${message.author} acaba de beijar ${user}💋`)//caso você for mudar para outro tipo de comando, mude essa mensagem também
        .setImage(rand)
        .setTimestamp()
        .setFooter("Bot-teste")
        .setThumbnail(avatar)
  await message.channel.send(embed);
}
//acima eu você fez um comando de beijar, e esse mesmo comando vai servir de base para outros desse mesmo tipo!
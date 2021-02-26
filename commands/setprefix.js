//O comando abaixo servira para você personalizar seu prefixo no seu servidor, utilizando firebase
const Discord = require('discord.js');

exports.run = async (client, message, args, database) => {
if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send(`Você é fraco, lhe falta mais educação e respeito ao usar meu comando`);

  let db = await database.ref(`Servidores/${message.guild.id}/Prefixo`).once('value');

  let novoprefixo = args[0];

  if(!novoprefixo) {
    if(db.val() == null) {
    return message.channel.send('Meu prefixo é `SEU PREFIX`')//troque "SEU PREFIX", para o prefixo do seu bot
  }
  if(db.val() != null) {
    return message.channel.send('Meu prefixo é `' + db.val().prefixo + '`' )
  }
  }

  database.ref(`Servidores/${message.guild.id}/Prefixo`).set({
    prefixo: novoprefixo
  })
  message.channel.send('Meu prefixo foi alterado para `' + novoprefixo + '`')
}
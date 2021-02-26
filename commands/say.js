//Aqui sera o say, comando para que o bot fale em seu nome

const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Você não tem permissão de usar esse comandos, você precisa "GERENCIAR MENSAGENS" para usar esse comando!`);//caso o membro não tenha permissão de gerenciar mensagens, o bot ira responder isso
 const mensagem = args.join(' ');
 message.delete().catch(O_o => {});//ira deletar a sua mensagem usando o comando
 message.channel.send(mensagem);//aqui ira enviar a mensagem que você disse
};
const Discord = require('discord.js');//Importando a livraria do discord.js
const client = new Discord.Client();
const config = require('./config.json');//puxando as informações da config.json

client.on("ready", () => {
    console.log("Estou Online")//sempre quando o bot ficar online ele ira mandar o "estou online" no console
})

//abaixo será a handler do bot, para fazer com que ele aceite os comandos da pasta "commands" (essa é uma handler simples, ela n aceita aliases, nem setprefix, para isso, tera que ter outra handler, que farei mais para frente)
client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

   const args = message.content
       .trim().slice(config.prefix.length)
       .split(/ +/g);
   const command = args.shift().toLowerCase();

   try {
       const commandFile = require(`./commands/${command}.js`)
       commandFile.run(client, message, args);
   } catch (err) {
   console.error('Erro:' + err);
 }
});

client.login(config.token)//Caso ele consiga acessar o token na config.json, e ele ira mandar no console "estou online"
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

//abaixo sera para você colocar os status do seu bot! OBSERVAÇÃO!: troque todos os testos de atividade escritos "texto(algum numero)", para as informações que você quer  que apareça!
//obs onde esta escrito "url: "https://www.twitch.tv/SUATWITCH", troque o "SUATWITCH", para o link do seu canal da twitch, para que quando esse status apareça, ele apareça com o simbolo roxo de STREAMING!
client.on("ready", async () => {
    console.log("Bot iniciado");
     console.log("Estou em " + client.guilds.cache.size + " servidores!\n" + client.user.tag + ", " + client.user.id);
     client.user.setStatus("idle")
     client.user.setActivity("Texto1", {type: "GAMING"})
     
     setInterval( async () => {
         let random = Math.floor(Math.random() * 9);
       
       
       client.user.setStatus("idle")
       
       if (random == 0) client.user.setActivity("Texto2", {type: "LISTENING"})
       if (random == 1) client.user.setActivity("Texto3", {type: "STREAMING", url: "https://www.twitch.tv/SUATWITCH"})
       if (random == 2) client.user.setActivity("Texto4", {type: "STREAMING", url: "https://www.twitch.tv/SUATWITCH"})
       if (random == 3) client.user.setActivity(`🔍${client.guilds.cache.size}  servidores🔍 (se quiser trocar pode)`, {type: "WATCHING"})
       if (random == 4) client.user.setActivity("Texto5", {type: "STREAMING", url: "https://www.twitch.tv/SUATWITCH"})
       if (random == 5) client.user.setActivity("Texto6")
        if (random == 6) client.user.setActivity("Texto7", {type: "STREAMING", url: "https://www.twitch.tv/SUATWITCH"})
       if (random == 7) client.user.setActivity(`👩‍👩‍👦‍👦${client.users.cache.size}  Membros👩‍👩‍👦‍👦 (se quiser trocar pode)`, {type: "LISTENING"})
       if (random == 8) client.user.setActivity("Texto8", {type: "STREAMING", url: "https://www.twitch.tv/SUATWITCH"})
       
       }, 1000 * 5);
   
     
   }) 
  console.log("Estou Online!")
  ;     
  

client.login(config.token)//Caso ele consiga acessar o token na config.json, e ele ira mandar no console "estou online"
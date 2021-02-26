const Discord = require('discord.js');//Importando a livraria do discord.js
const client = new Discord.Client();
const config = require('./config.json');//puxando as informações da config.json
const firebase = require('firebase');
const db = require('quick.db');

client.on("ready", () => {
    console.log("Estou Online")//sempre quando o bot ficar online ele ira mandar o "estou online" no console
})

//Agora iremos usar quick.db pela primeira e ultima vez

//Abaixo Você ira colocar para o sistema de AFK, onde a utilização sera (prefixo)afk (motivo), e sempre que você for marcado, ira dizer que você esta afk, e quando você soltar alguma palavra no chat, isso será retirado!

client.on('message', async message=>{
    if(db.has(`afk-${message.author.id}+${message.guild.id}`)) {
          const info = db.get(`afk-${message.author.id}+${message.guild.id}`)
          await db.delete(`afk-${message.author.id}+${message.guild.id}`)
          message.reply(`O seu status de afk foi retirado! (${info})`)
      }
      //checking for mentions
      if(message.mentions.members.first()) {
          if(db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) {
              message.channel.send(message.mentions.members.first().user.tag + ":" + db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`))
          }else return;
      }else;
  })
//acima fizemos o sistema, agora falta apenas fazer o comando para ser utilizado! (a continuação sera em "afk.js")  

//abaixo será a handler do bot, para fazer com que ele aceite os comandos da pasta "commands" (essa é uma handler simples, ela n aceita aliases, nem setprefix, para isso, tera que ter outra handler, que farei mais para frente)
client.on("ready", () => {
    console.log("Estou online!")
  }) 
  client.on('message', async message => {
    if(message.channel.type == 'dm') return;
    database.ref(`Servidores/${message.guild.id}/Prefixo`).once('value').then(async function (db) {
      if(db.val() != null) {
       if (message.author.bot) return;
       if (message.channel.type == 'dm') return;
       if (!message.content.toLowerCase().startsWith(db.val().prefixo.toLowerCase())) return;
       if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
  
      const args = message.content
          .trim().slice(db.val().prefixo.length)
          .split(/ +/g);
      const command = args.shift().toLowerCase();
  
      try {
          const commandFile = require(`./commands/${command}.js`)
          commandFile.run(client, message, args, database);
      } catch (err) {
      console.error('Erro:' + err);
    }
      }
    if(db.val() == null) {
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
          commandFile.run(client, message, args, database);
      } catch (err) {
      console.error('Erro:' + err);
    }
    }
    })
    });
  

//Aqui iremos fazer a nossa introdução ao firebase, um banco de dados potente, onde pode ser feita muitas coisas, e nossa primeira coisa será sistema de levels!
//Primeiramente, você ira entrar no site: https://firebase.google.com/?hl=pt-br, e la você irá logar na sua conta google, ira clicar em "ir para o console", no canto superior esquerdo, depois irá clicar em "adicionar projeto", ira escolher o nome, e não precisara ativar o google analitycs para o projeto, após ter criado, você ira clicar em "Adiconar APP", e ira dar um nome para ele, após ter feito isso, você ira pegar as informações que sera dada para você, e ira colocar igual colocarei a seguir: (caso não tenha ficado bem explicado, me chame no discord "Vitogiu1#0001", e explicarei melhor!)
var firebaseConfig = {
    apiKey: "SUA API KEY",
    authDomain: "DOMINIO DO SEU APP DO FIREBASE",
    projectId: "ID DO PROJETO",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  // Iniciando o Firebase
  firebase.initializeApp(firebaseConfig);

  //após ter feito a configuração acima, você ira em "Realtime Database", irá criar uma realtime database, e pronto, agora você n ira mais mexer no console do firebase, só fique nessa tela, para saber se ele esta criando as coisas desejadas!

  //Iniciando o sistema de levels:
  var database = firebase.database()

 client.on('message', async message => {
      global.xp = '';
      global.nextLevel = '';
      let pointsAdd = Math.floor(Math.random() * 7)+ 8;

      database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
      .once('value').then(async function(snap) {
        if(message.author.bot) return;
        if(snap.val() == null) {
              database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
              .set({
                xp: 0,
                level: 1,
                user: message.author.username,
              });
        } else {
          xp = snap.val().xp + pointsAdd;
          nextLevel = snap.val().level * 500;
          database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
          .update({
            xp: xp
          })
          if(nextLevel <= xp) {
            nextLevel = snap.val().level + 1;
          database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
          .update({
            level: nextLevel,

          })
          let embed = new Discord.MessageEmbed()
          .setTitle('Rank!')
          .setDescription(`Parabéns ${message.author} você agora é Nível ${nextLevel}! `)
          .setColor('RANDOM')
          await message.channel.send(embed)
          } 
        }
      })
    });

    //acima fizemos o sistema de level, onde você ganhara uma quantidade de xp a cada mensagem, e será nescessário 500 de xp para subir de nivel, e sempre a quantidade de xp para subir de nivel, vai ficar se adicionando por 500


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
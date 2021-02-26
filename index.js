const Discord = require('discord.js');//Importando a livraria do discord.js
const client = new Discord.Client();
const config = require('./config.json');//puxando as informações da config.json

client.on("ready", () => {
    console.log("Estou Online")//sempre quando o bot ficar online ele ira mandar o "estou online" no console
})

client.login(config.token)//Caso ele consiga acessar o token na config.json, e ele ira mandar no console "estou online"
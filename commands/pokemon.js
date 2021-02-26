//O comando abaixo ira mostrar algumas pequenas informações sobre o pokémon escolhido
const fetch = require('node-fetch');
const Discord = require('discord.js');
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

exports.run = async (client, message, args) => {
const pokemon = args[0].toLowerCase();

    if(!pokemon) {
        return message.channel.send('Que pokemon você quer buscar?');
    }

await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res => res.json()).then(res => {
      const data = res;
      const { sprites, name, id, types, abilities, attacks } = data;

let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setFooter("Exterminadores • © Todos os direitos reservados.")
        .setTitle(`${name.charAt(0).toUpperCase() + name.slice(1)} #${id}`)
        .setThumbnail(`${sprites.front_default}`);
        types.forEach(type => embed.addField('Tipo', type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1), true));
        abilities.forEach(ability => embed.addField('Habilidade', ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1), true));

      message.channel.send(embed);
    }).catch(err => {
      console.log(err);
      message.channel.send('Este Pokemon não existe.');
    });
  }
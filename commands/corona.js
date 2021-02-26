//O comando abaixo sera para exibir as informações proximas sobre o covid-19
const discord = require("discord.js")
const fetch = require("node-fetch")

module.exports = {
  name: "corona",
  category: "Informação",
  description: "Pega os status do covid-19",
  usage: "(prefix)corona all ou (prefix)corona (país)",
  run: async (client, message, args) => {
  



let msg = await message.channel.send({
  embed: {
    "description": "Pegando as informações",
    "color": "YELLOW"
  }
})
    
   
    if(!args[0] || args[0].toLowerCase() === "all" || args[0].toLowerCase() === "global") {
       try {
      let corona = await fetch("https://disease.sh/v3/covid-19/all")
      corona = await corona.json()
      
      let embed = new discord.MessageEmbed()
      .setTitle("Global Cases")
      .setColor("RANDOM")
      .setFooter("Bot-Teste")
      .setDescription("Às vezes, o número de casos pode ser diferente de uma pequena quantidade.")
      .addField("Total De Casos", corona.cases, true)
      .addField("Total De Mortes", corona.deaths, true)
      .addField("Total De Recuperados", corona.recovered, true)
      .addField("Casos Hoje", corona.todayCases, true)
      .addField("Mortes Hoje", corona.todayDeaths, true)
      .addField("Casos Ativos", corona.active, true);
      
     
      return msg.edit(embed)
      } catch(err) {
    
    msg.edit({embed: {
      
      "description": "Algo deu errado, perdão :(",
      "color": "RED"
    }})
  }
      
      
    } else {

       try {

      let corona = await fetch(`https://disease.sh/v3/covid-19/countries/${args.join(" ")}`)
      corona = await corona.json()
      
      let embed = new discord.MessageEmbed()
      .setTitle(`${corona.country.toUpperCase()}`)
      .setColor("GREEN")
      .setFooter("Bot-teste")
      .setDescription("Às vezes, o número de casos pode ser diferente de uma pequena quantidade.")
      .setThumbnail(corona.countryInfo.flag || "")
      .addField("Total De Casos", corona.cases, true)
      .addField("Total De Mortes", corona.deaths, true)
      .addField("Total De Recuperados", corona.recovered, true)
      .addField("Casos Hoje", corona.todayCases, true)
      .addField("Mortes Hoje", corona.todayDeaths, true)
      .addField("Casos Ativos", corona.active, true);
      
      return msg.edit(embed)

      } catch(err) {
    
    msg.edit({embed: {
      
      "description": "Não encontrei as informações sobre o país",
      "color": "RED"
    }})
  }
      
      
    }
    
  

  }
}
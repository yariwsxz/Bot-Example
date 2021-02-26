const Discord = require('discord.js');//exportando a livraria do discord.js

exports.run = async (client, message, args) => {
    const qualquernome = new Discord.MessageEmbed()//abrindo a embed (no lugar de "qualquernome", você pode colocar qualquer coisa, pois isso n vai mudar o resultado final)
    .setTitle("TITULO")//Titulo da embed
    .setDescription("DESCRIÇÃO")//Descrição da Embed
    .setImage("IMAGEM")//Imagem grande do meio
    .setThumbnail("IMAGEM")//imagem pequena do canto superior esquerdo da embed
    .setColor("RANDOM")//aqui define a cor da embed, O valor RANDOM, vai colocar qualquer cor, ja se você quiser uma cor especifica, você vai colocar a #dessa cor no lugar de RANDOM
    .setFooter("SEU FOOTER")//mensagem que fica la embaixo
    //Você pode colocar mais coisas na embed, só colocar alguma outra coisa, como .setAuthor, e por ai vai

    message.channel.send(qualquernome)//Aqui a gente vai enviar a embed no canal (nos parenteses, você vai colocar o nome da embed que você definiu la em cima!)
    
}
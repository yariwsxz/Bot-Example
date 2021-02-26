//abaixo é o comando de enviar uma imagem de um tweet do trump, dizendo sua mensagem

const Discord = require("discord.js");
const { get } = require("superagent");
module.exports.run = async (client, message, args) => {
    try {
        if(!args[0]){
message.channel.send('⛔ **Você não usou o comando da maneira certa!! Use:.**\n`(prefixo)trump (texto)`')
return;
}
        let url = `https://nekobot.xyz/api/imagegen?type=trumptweet&text=${args.join(" ")}`
        get(url).then(res => {
            const embed = new Discord.MessageEmbed()
            .setColor("fea5ff")
            .setAuthor("Novo tweet do trump!")
            .setImage(res.body.message)
            setTimeout(() => {
                return message.channel.send(embed);
            }, 100);
        });
    } catch(err) {
        let errchannel = client.channels.get('ID DO CANAL CASO DE ALGUM ERRO CRITICO')
        errchannel.send(err)
        console.log(err)    
    }
}
module.exports.command = {
name: 'trump',
usable: "Users",
description: "Envia uma imagem do trump",
usage: "trump <TEXTO>",
category: "Manipulação de imagem",
};
//esse comando tira todas as musicas da call 

exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não esta em um canal de voz!`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma musica tocando no momento!`);

    client.player.clearQueue(message);

    message.channel.send(`${client.emotes.success} - O queque foi **Limpo** !`);

};

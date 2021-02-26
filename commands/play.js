//esse comando da play em alguma musica

exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não esta em um canal de voz!`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Por favor, coloque o nome de uma musica!`);

    client.player.play(message, args.join(" "));

};

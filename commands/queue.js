//Esse comando mostra todas as musicas na lista

exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não esta em um canal de voz!`);

    const queue = client.player.getQueue(message);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma musica na lista !`);

    message.channel.send(`**queue do servidor- ${message.guild.name} ${client.emotes.queue}**\nTocando no momento : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
        return `**#${i + 1}** - ${track.title} | ${track.author} (Colocado por : ${track.requestedBy.username})`
    }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `E **${queue.tracks.length - 5}** outras musicas...` : `tem **${queue.tracks.length}** Musica(s) na lista...`}`));

};

module.exports = (client, message, playlist) => {

    message.channel.send(`${client.emotes.music} - ${playlist.title} Foi adicionado na lista (**${playlist.items.length}** musicas) !`);

};
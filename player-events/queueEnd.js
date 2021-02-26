module.exports = (client, message, queue) => {

    message.channel.send(`${client.emotes.error} - A musica foi parada, pois não tem mais nenhuma musica na lista!`);

};
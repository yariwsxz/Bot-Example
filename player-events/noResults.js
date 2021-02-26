module.exports = (client, message, query) => {

    message.channel.send(`${client.emotes.error} - Não achei resultados no youtube para ${query} !`);

};
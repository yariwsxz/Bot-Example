module.exports = (client, error, message) => {

    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Essa musica ja começou a tocar nesse servidor`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Você não esta em um canal de voz!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Eu não tenho permissão para entrar no canal de voz, por favor, olhe minhas permissões!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Something went wrong ... Error : ${error}`);
    };

};

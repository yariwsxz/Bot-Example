module.exports = (client, message, track) => {

    message.channel.send(`${client.emotes.music} - Esta tocando agora ${track.title} em ${message.member.voice.channel.name} ...`);

};
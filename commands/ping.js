//esse é nosso primeiro comando, sempre recomendo começar pelo ping, pois com isso você ira saber se ele esta aceitando comandos, e também o tempo de resposta dele
//lembrando, que toda vez que você fizer um novo arquivo em NodeJs ele sempre tem que terminar com a sigla ".js", igual nesse comandos

module.exports.run = async (client, message, args) => {
    const m = await message.channel.send('ping?');
  
    m.edit(`🏓 **| Pong!**\nPing do Server: **${m.createdTimestamp -
        message.createdTimestamp}ms.**\nPing da API: **${Math.round(
        client.ws.ping
      )}ms**`
    );
  };
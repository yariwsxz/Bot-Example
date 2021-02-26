const { MessageEmbed } = require("discord.js");
module.exports = async (message) => {
  try {
    let embed = new MessageEmbed()
      .setTitle(`Nova mensagem deletada!`)
      .setColor(`RANDOM`)
      .setDescription(
        `**O membro ${message.author} Editou uma mensagem em <#${message.channel.id}>**`
      )
      .addField(`Mensagem`, message.content, true)
    let channel = message.guild.channels.cache.find(
      (ch) => ch.name === "📲-logs"//A mensagem sera enviada para um canal com esse nome "📲-logs"
    );
    if (!channel) return;
    channel.send(embed);
  } catch (e) {}
};
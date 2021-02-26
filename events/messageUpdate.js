const { MessageEmbed } = require("discord.js");
module.exports = async (oldMessage, newMessage) => {
  try {
    let embed = new MessageEmbed()
      .setTitle(`Nova mensagem editada!`)
      .setColor(`RANDOM`)
      .setDescription(
        `**O membro ${oldMessage.author} Editou uma mensagem em <#${oldMessage.channel.id}>**`
      )
      .addField(`Mensagem antes`, oldMessage.content, true)
      .addField(`Nova mensagem`, newMessage.content, true);
    let channel = oldMessage.guild.channels.cache.find(
      (ch) => ch.name === "📲-logs"//A mensagem sera enviada para um canal com esse nome "📲-logs"
    );
    if (!channel) return;
    channel.send(embed);
  } catch (e) {}
};
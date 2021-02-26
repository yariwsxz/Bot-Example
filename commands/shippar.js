//comando de ship usando canvas, para mostrar a % de amor entre 2 usuários

const Canvas = require('canvas');
const Discord = require('discord.js')
const canvas = Canvas.createCanvas(384, 128);
const ctx = canvas.getContext('2d');
const { createCanvas, loadImage } = require('canvas')

module.exports.run = async (bot, message, args) => {
  let membro1 = message.mentions.members.first()
    let membro2 = message.mentions.members.last()
  
  if(!membro1 || !membro2) return message.channel.send('Lembre-se de mencionar dois usuários para shippar')
    if(membro1 === membro2) return message.channel.send('Mencione duas pessoas diferentes')
  
  const amor = Math.floor(Math.random() * 100);
    const loveIndex = Math.floor(amor / 10);
  const loveLevel = "█".repeat(loveIndex) + ".".repeat(10 - loveIndex);

    let nomeFim1 = membro1.user.username.length;
      let nomeFim2 = membro2.user.username.length;

      let calc1 = nomeFim1 - 3
    let calc2 = nomeFim2 - 3
  
  let nomeship;
    if(amor > 60) {
      nomeship = membro1.user.username.slice(0, 3) + membro2.user.username.slice(0, 3);
    } else if(amor >= 40) {
      nomeship = membro1.user.username.slice(0, calc1) + membro2.user.username.slice(0, calc2)
    } else {
      nomeship = membro1.user.username.slice(calc1, nomeFim1) + membro2.user.username.slice(calc2, nomeFim2)
    } 
  
  let emoticon;
    if(amor > 60) {
      emoticon = ("https://cdn.glitch.com/00963c7e-8e86-4a55-8d85-36add9e330d7%2Femoji_2.png?v=1593651528429"); //imagem de coração
    } else if(amor >= 40) {
      emoticon = ("https://cdn.glitch.com/00963c7e-8e86-4a55-8d85-36add9e330d7%2Femoji_3-1.png?v=1593652255529"); //imagem de sei lá
    } else {
      emoticon = ("https://cdn.glitch.com/00963c7e-8e86-4a55-8d85-36add9e330d7%2Femoji_1.png?v=1593651511900"); //imagem chorando
    }

  let desc;
    if(amor > 90) {
      desc = ("``"+membro1.user.username+"`` & ``"+membro2.user.username+"``\n:heart: Esse casal vai ter uma lua de mel muito boa! :heart:");
    } else if(amor >= 70) {
      desc = ("``"+membro1.user.username+"`` & ``"+membro2.user.username+"``\n:neutral_face: Esses aqui já tão se pegando e não contaram pra ninguém! :neutral_face:");
    } else if(amor >= 45) {
      desc = ("``"+membro1.user.username+"`` & ``"+membro2.user.username+"``\n:no_mouth: Talvez, só precisa o "+membro2.user.username+" querer... :no_mouth:");
    } else {
      desc = ("``"+membro1.user.username+"`` & ``"+membro2.user.username+"``\n:cry:queria muito dizer que é possivel mas... :cry: ");
    }
  
  const canvas = Canvas.createCanvas(384, 128);
  const ctx = canvas.getContext('2d');
    
  const emote = await Canvas.loadImage(emoticon);
    const foto1 = await Canvas.loadImage(membro1.user.displayAvatarURL({format: "png"}))
  const foto2 = await  Canvas.loadImage(membro2.user.displayAvatarURL({format: "png"}))

    ctx.drawImage(emote, 125, 0, 128, 128)
      ctx.drawImage(foto1, -10, 0, 128, 128)
    ctx.drawImage(foto2, 260, 0, 128, 128)

 const amorat = new Discord.MessageAttachment(canvas.toBuffer(), 'chances-image.png')
      
  
let amorEmbed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('Ship!')
  .addField(':sparkling_heart: Será que vai rolar beijo? :sparkling_heart:', desc)
  .addField('Nome do casal:', "``"+nomeship+"``", true)
  .addField("Amor:", "**"+amor+"%** [`"+loveLevel+"`]", true)
  .attachFiles([amorat]).setImage('attachment://chances-image.png')


  message.channel.send(amorEmbed)

  
}
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
 // 03.03.2013
module.exports = {
  name: "davet",
  description: "özgür js", 
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
    `
\[Botu sunucunuza eklemek için buraya tıklayın.](Botunuzun davet linkini girin)\n
`)
                       .setColor("ffc300")
                      )    
}
} 
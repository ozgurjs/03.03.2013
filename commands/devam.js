module.exports = {
  name: "devam", 
  description: "özgür js",
  execute (client, message, args) {
     // 03.03.2013
      const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("**Herhangi bir ses kanalında bulunmalısınız.**");
    }
    const serverQueue = message.client.queue.get(message.guild.id);
    if(!serverQueue) return message.channel.send('**Oynatılan bir şarkı Bulunmuyor.**')
    if(serverQueue.playing) return message.channel.send(`Duran bir şarkı yok.`)
     // 03.03.2013
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume(true)
  
  return message.channel.send("✅ **| Duraklatılan şarkı sürdürüldü.**") 
 } 
    
    message.channel.send("**Duraklatılan bir şarkı yok.**")
    
  }
}
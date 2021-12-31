module.exports = {
  name: "atla",
  description: "özgür js",
  execute(client, message, args) {
    const { channel } = message.member.voice;
   // 03.03.2013
    if (!channel) {
      return message.channel.send("**Herhangi bir ses kanalında bulunmalısınız.**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("**Atlayabileceğim bir şarkı yok.**");
    }  // 03.03.2013
    serverQueue.connection.dispatcher.end();
    message.channel.send("✔ **| Şarkı geçildi.**");
  }
};
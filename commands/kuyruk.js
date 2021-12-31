module.exports = {
  name: "sıra",
  description: "özgür js",
  execute: (client, message, args) => {
     // 03.03.2013
    const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("**Herhangi bir ses kanalında bulunmalısınız.**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("**Kuyrukta şarkı bulamadım.**");
    } 
 // 03.03.2013
    message.channel.send(
      `${serverQueue.songs
        .map((song, index) => index + 1 + ". " + song.title)
        .join("\n\n")}`,
      { split: true }
    );
  }
};
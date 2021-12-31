const discord = require("discord.js")
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { join } = require("path");
const ayarlar = require("./ayarlar.json")
// 03.03.2013
client.on("ready", () => {
  console.log('03.03.2013')
  client.user.setActivity("özgür js")
})
client.on("warn", info => console.log(info));

client.on("error", console.error)

client.commands = new discord.Collection()
client.prefix = ayarlar.PREFIX
client.queue = new Map();

// 03.03.2013
const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"))
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file))
  client.commands.set(command.name, command)
} 


client.on("message", message => {
   if (message.author.bot) return;
  if (!message.guild) return;
  
  if(message.content.startsWith(ayarlar.PREFIX)) {
    
    const args = message.content.slice(ayarlar.PREFIX.length).trim().split(/ +/)
    const command = args.shift().toLowerCase();
    
    if(!client.commands.has(command)) {
      return;
    } 
  try  { 
      client.commands.get(command).execute(client, message, args)
    } catch (err) { 
      console.log(err)
      message.reply("Bir hata oluştu!")
    }
    
  }
  // 03.03.2013
});

client.login(process.env.TOKEN)
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Server Patata ahí te voy");
    presence();
 });

 client.on("message", (message) => {
  if(message.content.startsWith(";help")) {
    message.channel.startTyping();
    setTimeout(() => {//Agregamos un setTimeout para que el efecto dure mas
      message.channel.send("**𝐁𝐨𝐭 𝐞𝐧 𝐃𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨**");
      message.channel.stopTyping()//Hacemos que el bot deje de escribir
    }, 1000);//cerramos el setTimeout
    };
  });

 client.login("ODIxMzkwMDM5NDA5ODg1MTg0.YFDBFg.rylf2GpXIzEhkQwtY8zisxoYFfs");

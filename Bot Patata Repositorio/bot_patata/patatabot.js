const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Server Patata ahÃ­ te voy");
    presence();
 });

 client.on("message", (message) => {
  if(message.content.startsWith(";help")) {
    message.channel.startTyping();
    setTimeout(() => {//Agregamos un setTimeout para que el efecto dure mas
      message.channel.send("**ðð¨ð­ ðð§ ððð¬ðð«ð«ð¨ð¥ð¥ð¨**");
      message.channel.stopTyping()//Hacemos que el bot deje de escribir
    }, 1000);//cerramos el setTimeout
    };
  });

 client.login("Token Secreto");

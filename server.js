const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");

const client = new Discord.Client();

function presence(){
  client.user.setPresence({
     status: "dnd",
     game: {
        name: "Serveer Patata | ;help",
        type: "PLAYING"
     }
  });
}
client.on("ready", () => {
    console.log("Server Patata hi te voy");
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

 client.login("Token Secreto");

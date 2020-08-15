const discord = require("discord.js");
const client = new discord.Client();
const fs = require("fs");

function Run(message) {
  if(message.content === "!avatar") message.channel.send(message.author.avatarURL());
}

client.on("message", message => Run(message));

exports.login = function (token) {
  return client.login(token);
  client.once("ready", () => console.log(client.user.tag + "でログインしました。"));
}

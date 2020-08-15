const discord = require("discord.js");
const client = new discord.Client();
const fs = require("fs");

let prefix;

exports.prefix = function prefix(index) {
  return prefix = index;
}

function Run(message) {
    if(message.author.bot || !message.content.startsWith(prefix)) return;
    const [command, ...args] = message.content.slice(prefix.length).split(" ");
  if(command === "test") message.channel.send("test!");
}

client.on("message", message => Run(message));

exports.login = function (token) {
  return client.login(token);
}

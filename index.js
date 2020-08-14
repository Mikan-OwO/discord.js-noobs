const discord = require("discord.js");
const client = new discord.Client();
const fs = require("fs");

exports.prefix = function prefix(index) {
  return prefix = index;
}

exports.command = async function run(cmd, send) {
  client.on("message", message => {
    if(!message.content.startsWith(prefix)) return;
    const [command, ...args] = message.content.slice(prefix.length).split(" ");
    if(command === cmd) {
      message.channel.send(send);
    }
  });
}

exports.login = function (token) {
  return client.login(token);
}

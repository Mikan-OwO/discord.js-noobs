'use strict';

const discord = require("discord.js");
const client = new discord.Client();

exports.message = function (name, value) {
  client.on("message", message => {
    if(message.content === name) message.channel.send(value);
  })
}

exports.command = function (prefix, name, value) {
  client.on("message", message => {
    if(!message.content.startsWith(prefix)) return;
    const [command, ...args] = message.content.slice(prefix.length).split(" ");
    if(command === name) message.channel.send(value);
  })
}

exports.login = function (token) {
  return client.login(token);
}

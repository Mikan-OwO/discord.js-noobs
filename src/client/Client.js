'use strict';

const discord = require("discord.js");
const client = new discord.Client();

exports.message = function (name, value) {
  function Run(message) {
    if(message.content === name) message.channel.send(value);
  }
}

client.on("message", message => Run(message));

exports.login = function (token) {
  return client.login(token);
}

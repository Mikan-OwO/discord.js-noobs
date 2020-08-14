const discord = require("discord.js");
const client = new discord.Client();
const fs = require("fs");

async function (message, [command, ...args]) {
}

exports.login = function (token) {
  return client.login(token);
}

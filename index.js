const discord = require("discord.js");
const client = new discord.Client();
const fs = require("fs");

exports.login = function (token) {
  return client.login(token);
}

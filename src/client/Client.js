const discord = require("discord.js");
const client = new discord.Client();

exports.login = function (token) {
  return client.login(token);
}

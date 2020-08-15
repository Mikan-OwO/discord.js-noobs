const discord = require("discord.js");
const client = new discord.Client();
const fs = require("fs");

let prefix;

exports.prefix = function prefix(index) {
  return prefix = index;
}

exports.command = async function cmd(index, run) {
  let evaled;
  try {
  evaled = eval(run);
  } catch (error) {
    console.log(error);
  }
}

function Run(message) {
    if(!message.content.startsWith(prefix)) return;
    const [command, ...args] = message.content.slice(prefix.length).split(" ");
  if(command === cmd(command))
}

client.on("message", message => Run(message));

exports.login = function (token) {
  return client.login(token);
}

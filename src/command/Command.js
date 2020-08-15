'use strict';

const discord = require("discord.js");
const client = new discord.Client();

function Run(message) {
  const [command, ...arga] = message.content.slice(prefix.length).split(" ");
}

client.on("message", message => Run(message));

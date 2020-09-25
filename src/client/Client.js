const { Client: DiscordClient } = require("discord.js");

class Client extends DiscordClient {
  constructor(options = {}) {
    super(options);
  }
}

module.exports = Client;

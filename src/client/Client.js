const { Client: DiscordClient } = require("discord.js");

class Client extends DiscordClient {
  constructor(options = {}) {
    this.prefix = options.prefix;
    super(options.options);
  }
}

module.exports = Client;

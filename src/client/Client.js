const DiscordClient = require("discord.js").Client;

class Client extends DiscordClient {
  constructor(prefix, options = {}) {
    super(options);
  }
}

module.exports = Client;

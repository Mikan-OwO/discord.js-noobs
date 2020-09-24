const DiscordClient = require("discord.js").Client;

class Client extends DiscordClient {
  constructor(prefix, options = {}) {
    this.prefix = prefix;
    this.commands = [];
    super(options);
  }
  addCommand() {
    
  }
}

module.exports = Client;

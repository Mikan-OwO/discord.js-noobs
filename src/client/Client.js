const DiscordClient = require("discord.js").Client;

class Client extends DiscordClient {
  constructor(prefix, options = {}) {
    this.prefix = prefix;
    this.commands = [];
    super(options);
  }
  addCommand(options = {}) {
    this.commands.push({
      name: options.name,
      scripts: options.run
    });
  }
}

module.exports = Client;

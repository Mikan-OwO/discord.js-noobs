const { Client: DiscordClient, Collection } = require("discord.js");

const client = new DiscordClient();

module.exports = class Client {
  constructor(token, prefix = "!") {
    this.prefix = prefix;
    this.commands = new Collection();

    client.on("message", async (msg) => {
      const args = msg.content.slice(this.prefix.length).split(" ");

      if (msg.content.startsWith(this.prefix)) {
        const cmd = await this.commands.get(args.shift());
        if (cmd) return cmd(msg, args);
      }
    });

    client.login(token);
  }
  command(name, fn) {
    return this.commands.set(name, fn);
  }
};

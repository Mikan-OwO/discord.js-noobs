const { Client: DiscordClient, Collection } = require("discord.js");
const fs = require("fs");
const path = require("path");

module.exports = class Client extends (
  DiscordClient
) {
  constructor(token, prefix = "!", options = {}) {
    super(options);
    this.prefix = prefix;
    this.commands = new Collection();

    this.on("message", async (msg) => {
      const args = msg.content.slice(this.prefix.length).split(" ");

      if (msg.content.startsWith(this.prefix)) {
        const cmd = await this.commands.get(args.shift());
        if (cmd) return cmd(msg, args);
      }
    });

    this.login(token);
  }
  command(name, fn) {
    this.commands.set(name, fn);
    return this;
  }
  fileCommand(filePath) {
    const { name, fn } = require(filePath);
    this.command(name, fn);
    return this;
  }
};

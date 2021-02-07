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
        if (cmd) return cmd(msg, args, this);
      }
    });

    this.login(token);
  }
  command(name, fn, options = {}) {
    this.commands.set(name, fn);
    return this;
  }
  commandDir(filePath, options = {}) {
    const targetDir = path.resolve(filePath);
    const files = fs.readdirSync(targetDir);

    if (!files.length) console.warn("The command file cannot be found.");

    files.map((file) => {
      const { name, fn } = require(path.join(path.resolve(filePath), file));

      this.command(name, fn);
    });

    return this;
  }
};

const { Client: DiscordClient, Collection } = require("discord.js");
const { Logger } = require("parrot-logger");
const fs = require("fs");
const path = require("path");

const logger = new Logger();

class Client extends DiscordClient {
  constructor(config = {}) {
    super(config.options ?? {});
    this.prefixes = config.prefixes ?? ["!"];
    this.commands = new Collection();

    this.on("ready", () => {
      logger.info(`Hello, Logged in as ${this.user.tag}`);
      logger.info("Guilds :", this.guilds.cache.size);
    }).on("message", (msg) => {
      this.prefixes.map(async (prefix) => {
        const args = msg.content.slice(this.prefix.length).split(" ");

        if (msg.content.startsWith(prefix)) {
          const cmd = await this.commands.get(args.shift());
          if (cmd) return cmd(msg, args, this);
        }
      });
    });

    this.login(config.token);
  }
  command(name, fn) {
    this.commands.set(name, fn);
    return this;
  }
  commandDir(filePath) {
    const targetDir = path.resolve(filePath);
    const files = fs.readdirSync(targetDir);

    if (!files.length) console.warn("The command file cannot be found.");

    files.map((file) => {
      const { name, fn } = require(path.join(path.resolve(filePath), file));

      this.command(name, fn);
    });

    return this;
  }
}

module.exports = Client;

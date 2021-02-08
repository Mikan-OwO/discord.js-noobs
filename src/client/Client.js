const { Client: DiscordClient, Collection } = require("discord.js");
const { Logger } = require("parrot-logger");
const fs = require("fs");
const path = require("path");

const logger = new Logger();

class Client extends DiscordClient {
  #ignoreBots;
  constructor(config = {}) {
    super(config.options ?? {});
    this.#ignoreBots = config.ignoreBots ?? false;
    this.prefixes = config.prefixes ?? ["!"];
    this.commands = new Collection();

    this.on("ready", () => {
      logger.info(`Hello, Logged in as ${this.user.tag}`);
      logger.info(`Guilds : ${this.guilds.cache.size}`);
    }).on("message", (msg) => {
      if (this.#ignoreBots && msg.author.bot) return;
      this.prefixes.map(async (prefix) => {
        const [cmd, ...args] = msg.content.slice(prefix.length).split(" ");

        if (msg.content.startsWith(prefix)) {
          const { fn, options } = await this.commands.get(cmd);
          if (fn) {
            if (
              options?.practicable &&
              !options?.practicable?.includes(msg.author.id)
            )
              return;

            await fn(msg, args, this);
          }
        }
      });
    });

    this.login(config.token);
  }
  command(name, fn, options = {}) {
    if (Array.isArray(name))
      name.map((n) => this.commands.set(n, { fn, options }));
    else this.commands.set(name, { fn, options });
    return this;
  }
  commandsDir(filePath) {
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

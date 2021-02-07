const { Client } = require("../index");

const client = new Client("your token", "prefix");

client
  .command("test", (msg, args) => {
    msg.reply(`ok!\nargs:\n${args.join("\n")}`);
  })
  .command("ping", (msg) => msg.channel.send("pong!"));

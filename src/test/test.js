const { Client } = require("../index");

const client = new Client("yourToken", "!");

client
  .command("test", (msg, args) => {
    msg.reply(`ok!\nargs: ${args.join("\n")}`);
  })
  .command("ping", (msg) => msg.channel.send("pong!"));

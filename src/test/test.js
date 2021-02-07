const { Client } = require("../index");

const client = new Client({
  prefixes: ["!"],
  token: "your token",
});

client
  .command("hi", (msg, args) => {
    msg.reply(`hi ${args.join(" ")}!`);
  })
  .command("ping", (msg) => msg.channel.send("pong!"));

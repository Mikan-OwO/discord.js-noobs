const { Client } = require("../index");

const client = new Client(
  "NzI5OTg2ODkyNjc3OTA2NDMy.XwQ7RQ.BUIAyOpCSF-tFzrhMZcrJcpsxN4",
  "m!"
);

client.command("test", (msg, args) => {
  msg.reply(`ok!\nargs: ${args.join("\n")}`);
});

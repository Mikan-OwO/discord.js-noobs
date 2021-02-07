# discord.js-noobs

[![NPM](https://nodei.co/npm/discord.js-noobs.png)](https://nodei.co/npm/discord.js-noobs/)

![GitHub package.json version](https://img.shields.io/github/package-json/v/Mikan-OwO/discord.js-noobs)
![GitHub issues](https://img.shields.io/github/issues/Mikan-OwO/discord.js-noobs)
![GitHub stars](https://img.shields.io/github/stars/Mikan-OwO/discord.js-noobs?style=social)

## Install

```shell
npm i discord.js-noobs
```

## Client

create new Client

```js
const { Client } = require("discord.js-noobs");
const client = new Client({
  prefixes: ["!"],
  token: "your token",
});
```

add command

```js
client.command("ping", (msg) => {
  msg.reply("pong!");
});
```

load command

```js
//index.js
client.commandDir("./command");

//command/ping.js
const { Command } = require("discord.js-noobs");

module.exports = new Command("ping").run((msg) => {
  msg.reply("pong!");
});
```

## NoobsEmbed

```js
const { Client, NoobsEmbed } = require("discord.js-noobs");
const client = new Client({
  prefixes: ["!"],
  token: "your token",
});

//Simple embed
client.command("help", (msg) => {
  msg.channel.send(
    new NoobsEmbed()
      .setTitle("title")
      .addField("name", "value")
      .setColor("RANDOM")
      .setTimestamp()
  );
});

//Pagination
client.command("help", (msg) => {
  new NoobsEmbed({
    type: "book",
    client: client,
  }).addPages([
    new NoobsEmbed().setTitle("1/2").addField("help", "open help"),
    new NoobsEmbed().setTitle("2/2").addField("ping", "pong"),
  ]);
});
```

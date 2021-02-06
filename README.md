# discord.js-noobs

## Sample

```js
const { Client } = require("discord.js-noobs");
const client = new Client("yourToken", "prefix");

client.command("ping", (msg) => {
  msg.reply("pong!");
});
```

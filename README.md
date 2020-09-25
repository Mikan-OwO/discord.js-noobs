# discord.js-noobs

## Sample
```js
const { Client, Message } = require("discord.js-noobs");
const client = new Client({ prefix: "!" });

client.on("message", message => {
    const msg = new Message(message);

    if(message.content === client.prefix + "ping") {
        msg.send({
            place: "channel",
            content: "pong!"
        });
    }

    if(message.content === "thinking") {
        msg.react([
            ":regional_indicator_t:",
            ":regional_indicator_h:",
            ":regional_indicator_i:",
            ":regional_indicator_n:",
            ":regional_indicator_k:"
        ]);
    }
});

client.login("your token");
```
# discord.js-noobs

## Sample
```js
const { Client, MessageOptions } = require("discord.js-noobs");
const client = new Client();

client.on("message", message => {
    const msg = new MessageOptions(message);

    if(message.content === "!ping") {
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

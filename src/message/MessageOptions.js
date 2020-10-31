class Message {
    constructor(message) {
        this.message = message;
    }
    send(options = {}) {
        const place = options.place || "channel";
        switch(options.place) {
            case "author":
                this.message.author.send(options.content);
            break;

            case "channel":
                this.message.channel.send(options.content);
            break;

            default:
                throw new Error("There is no such 'place'.");
            break;
        }

        return this;
    }
    react(emojis = []) {
        if(emojis !== undefined) {
            emojis.forEach(emoji => {
                this.message.react(emoji);
            });
        } else {
            throw new Error("Please specify an Emoji");
        }

        return this;
    }
}

module.exports = Message;

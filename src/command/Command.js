class Command {
    constructor(options = {}) {
        this.prefix = String(options.prefix);
        this.message = options.message;
    }
    addCommand(options = {}) {
        const [command,...args] = this.message.content.slice(this.prefix.length).split(" ");
        this.name = String(options.name);
        this.script = options.run;
        if(command === this.name) this.script;

        return this;
    }
}

module.exports = Command;
module.exports = class Command {
  constructor(name) {
    this.name = name;
  }
  run(fn) {
    this.fn = fn;
    return this;
  }
};

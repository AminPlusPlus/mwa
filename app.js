const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("sendMessage", (args) => {
  console.log(`${args.id}`);
});

eventEmitter.emit("sendMessage", { id: "112", name: "Amin" });

const fs = require("fs");

const messages = require("./messages.js");

fs.writeFileSync(
  "messages.json",
  JSON.stringify(messages, null, 2),
  "utf8"
);

console.log("messages.json créé !");

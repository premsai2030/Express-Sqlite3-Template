const Server = require("./src/server");

try {
  new Server();
} catch (err) {
  console.log(err);
}

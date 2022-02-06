const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");

require("./config/db").setup();
class Server {
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors()); // Modify According To The Use Case
    this.app.use(helmet());
    this.app.use(morgan(":method :url :response-time"));
    routes.forEach((router, path) => {
      this.app.use(path, router);
    });
    this.app.listen(5000, (err) => {
      if (!err) console.log("running successfully");
      else console.log(err);
    });
  }
}

module.exports = Server;

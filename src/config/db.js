const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();

class Database {
  static setup() {
    try {
      if (!fs.existsSync("./database")) {
        console.log("creating directory as it does'nt exist");
        fs.mkdir("./database", (err) => {
          if(err) console.log("error");
          else console.log("created");
        });
      }
    } catch {
      console.log("some error has occured while creating/checking directory!");
    }
  }
  static connection() {
    this.db = new sqlite3.Database("./database/database.db");
    return this.db;
  }
}

module.exports = Database;

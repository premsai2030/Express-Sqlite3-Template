import Database from "../config/db";
const db = Database.connection();
class PersonService {
  constructor() {
    db.run(`
      CREATE TABLE IF NOT EXISTS person(
      id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(255) NOT NULL,
      gender VARCHAR(10) NOT NULL,
      phone_number VARCHAR(20) NOT NULL
      )`);
  }
  async getAll() {
    const data = await new Promise((resolve, reject) => {
      db.all("SELECT * FROM person", [], (err, rows) => {
        if (err) reject(err);
        else resolve({ data: rows });
      });
    });
    return data;
  }
  async createPerson(data) {
    const result = await new Promise((resolve, reject) => {
      db.run(
        `
      INSERT INTO person(name, gender, phone_number) 
      VALUES(?, ?, ?) 
      `,
        [data.name, data.gender, data.phone_number],
        (err) => {
          if (err) reject(err);
          else resolve("inserted");
        }
      );
    });
    return result;
  }
}

export default new PersonService();

const services = require("../services");

class PersonController {
  async getAll(req, res) {
    try {
      const result = await services.personService.getAll();
      res.json(result).status(200);
    } catch {
      res.send("Error Occured").status(404);
    }
  }
  async createPerson(req, res) {
    const data = req.body;
    try {
      await services.personService.createPerson(data);
      res.send("Successfully Inserted").status(201);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new PersonController();

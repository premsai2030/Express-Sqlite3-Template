const person = require("./person.route");

const routes = new Map([["/api/person", person]]);
module.exports = routes;

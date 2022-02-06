const router = require("express").Router();
const controllers = require("../controllers");

router.get("/", controllers.personController.getAll);
router.post("/createPerson", controllers.personController.createPerson);

module.exports = router;

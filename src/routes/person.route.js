import { Router } from "express";
import controllers from "../controllers";
const router = Router();

router.get("/", controllers.personController.getAll);
router.post("/createPerson", controllers.personController.createPerson);

export default router;

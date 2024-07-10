import { Router } from "express";
import { createRent } from "../controllers/rent.controllers.js";
import { validateInformation } from "../middleware/rent.middleware.js";
import { deleteReseve, getReservation } from "../controllers/rent.controllers.js";

const router = Router()

router.post("/register", validateInformation, createRent)

router.get("/register",getReservation)

router.delete("/register/:id", deleteReseve)

export default router
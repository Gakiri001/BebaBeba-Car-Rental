import { Router } from "express";
import { createRent } from "../controllers/rent.controllers.js";
import { validateInformation } from "../middleware/rent.middleware.js";

const router = Router()

router.post("/register", validateInformation, createRent)

router.get("/register",(req,res) => {
  res.send("yooh")
})

export default router
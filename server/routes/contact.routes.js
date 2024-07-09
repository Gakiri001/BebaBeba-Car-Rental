import { Router } from "express";
import { createContact } from "../controllers/Contact.controllers.js";
import { validateInfo } from "../middleware/contanct.middleware.js";

const router = Router()

router.post("/contact",validateInfo, createContact)

router.get("/contact",(req,res) => {
  res.send("yooh")
})

export default router
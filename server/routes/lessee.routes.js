import { Router } from "express";
import { createLessee } from "../controllers/lessee.controllers.js";

const router  = Router()

router.post("/register", createLessee)

router.get("/", (req, res) => {
  res.send("Testing Lessee Details");
});

export default router
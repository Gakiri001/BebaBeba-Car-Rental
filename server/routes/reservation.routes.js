import { Router } from "express";
import { createReserve } from "../controllers/reserve.controllers.js";

const router = Router();

router.post("/register",createReserve)

router.get("/",(req,res) => {
  res.send("Testing Reserve Table")
})

export default router
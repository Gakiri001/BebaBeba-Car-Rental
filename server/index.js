import express from "express"
import { config } from "dotenv"

const app = express()
config()

app.get("/",(req,res) =>{
  res.send("yooh")
})

app.listen(8080,() => {
  console.log("App running on port 8080")
})

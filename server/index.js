import express from "express"
import { config } from "dotenv"
import usersRouter from './routes/users.routes.js'
import cors from 'cors'
config()

const app = express()
app.use(cors({
  origin:"http://localhost:5173/Signup",
  methods:["GET","POST","PATCH","DELETE"]
}))


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/api/users",usersRouter)

app.listen(8080,() => {
  console.log("App running on port 8080")
})

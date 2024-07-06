import express from "express";
import { config } from "dotenv";
import usersRouter from "./routes/users.routes.js";
import reserveRouter from "./routes/reservation.routes.js"
import cors from "cors";

config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/reserve", reserveRouter)

app.listen(8080, () => {
  console.log("App running on port 8080");
});

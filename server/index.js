import express from "express";
import { config } from "dotenv";
import usersRouter from "./routes/users.routes.js";
import reserveRouter from "./routes/reservation.routes.js";
import lesseeRouter from "./routes/lessee.routes.js"
import rentRouter from "./routes/rent.routes.js"
import ContactRouter from "./routes/contact.routes.js"
import cors from "cors";

config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials:true
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/reserve", reserveRouter);
app.use("/api/lessee/",lesseeRouter)
app.use("/api/rent/", rentRouter)
app.use("/api/subject/", ContactRouter)

app.get('/api/test', (req, res) => {
  res.json({ message: "API is working" });
});


app.listen(8080, () => {
  console.log("App running on port 8080");
});

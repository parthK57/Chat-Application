import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Routes
import signUpRoute from "./routes/users";

app.use(signUpRoute);

// Error handler
app.use((err: any, req: any, res: any, next: any) => {
  console.log(err.message);
  res.status(500).send("Server Error!");
});

app.listen(5000, () => console.log("Server is live!"));

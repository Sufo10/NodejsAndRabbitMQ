import express, { Application, urlencoded } from "express";
import dotenv from "dotenv";
import router from "./routes/User";

dotenv.config();
const port = process.env.port;
const app: Application = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

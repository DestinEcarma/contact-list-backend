import "./src/db/index.js";
import routes from "./src/routes/index.js";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);

app.listen(process.env.PORT, () => {
	console.log(`Server Staring at port ${process.env.PORT}`);
});

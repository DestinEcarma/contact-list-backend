import Add from "./add.js";
import Delete from "./delete.js";
import Display from "./display.js";
import Update from "./update.js";
import { Router } from "express";

const routes = Router();

routes.post("/add", Add);
routes.post("/update", Update);
routes.get("/display", Display);
routes.post("/delete", Delete);

export default routes;

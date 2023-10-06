import { Router } from "express";
import WalkersController from "../controller/WalkersController.js";

const walkersRouter = Router();

const walkersController = new WalkersController();

walkersRouter.get("/", walkersController.getAll);
walkersRouter.get("/:id", walkersController.getById);
walkersRouter.post("/", walkersController.create);
walkersRouter.put("/", walkersController.update);
walkersRouter.delete("/:id", walkersController.delete);

export default walkersRouter;

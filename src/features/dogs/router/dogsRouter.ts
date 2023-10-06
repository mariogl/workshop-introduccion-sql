import { Router } from "express";
import DogsController from "../controller/DogsController.js";

const dogsRouter = Router();

const dogsController = new DogsController();

dogsRouter.get("/", dogsController.getAll);
dogsRouter.get("/:id", dogsController.getById);
dogsRouter.post("/", dogsController.create);
dogsRouter.put("/", dogsController.update);
dogsRouter.delete("/:id", dogsController.delete);
dogsRouter.get("/walker/:id", dogsController.getAllByWalker);

export default dogsRouter;

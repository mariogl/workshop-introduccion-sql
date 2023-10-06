import express from "express";
import morgan from "morgan";
import walkersRouter from "../features/walkers/router/walkersRouter";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/walkers", walkersRouter);

export default app;

import express, { Request, Response } from "express";
import cors from "cors";

import index from "./routes/index";
import taskRoute from "./routes/task/task.router";

const app = express();

app.use(express.json());
app.use(cors());

app.use(taskRoute);
app.use(index);

export default app;

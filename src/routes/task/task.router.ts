import express from "express";
import * as controller from "./task.controller";
const router = express.Router();

router.route("/task").get(controller.list).post(controller.create);

export default router;

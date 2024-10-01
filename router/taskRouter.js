import express from "express";
import { AddTask, DeleteTask, GetTask, UpdateTask } from "../controller/taskController.js";

const router = express.Router();

router.route("/tasks").post(AddTask);
router.route("/tasks").get(GetTask);
router.route("/tasks/:id").put(UpdateTask);
router.route("/tasks/:id").delete(DeleteTask);

export default router;

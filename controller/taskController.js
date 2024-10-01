import { taskList } from "../models/taskModule.js";

// Add Task
export const AddTask = async (req, res) => {
  try {
    const { task } = req.body;
    if (!task || task.length === 0) {
      return res.status(404).json({ message: "Please add a task", success: false });
    }

    const newTask = new taskList({ task });
    await newTask.save();
    return res.status(200).json({
      message: "Task added successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server Error", success: false });
  }
};

// Get Task
export const GetTask = async (req, res) => {
  try {
    const tasks = await taskList.find();
    if (tasks.length === 0) {
      return res.status(404).json({ message: "No tasks available", success: false });
    }

    return res.status(200).json({ message: "Tasks retrieved", list: tasks, success: true });
  } catch (error) {
    return res.status(500).json({ message: "Server Error", success: false });
  }
};

// Delete Task
export const DeleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskList.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found", success: false });
    }
    return res.status(200).json({ message: "Task deleted successfully", task, success: true });
  } catch (error) {
    return res.status(500).json({ message: "Server Error", success: false });
  }
};

// Update Task
export const UpdateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { task } = req.body;
    console.log("req.body" , req.body);
    const updateText = await taskList.findByIdAndUpdate(id, { task }, { new: true });
    if (!updateText) {
      return res.status(404).json({ message: "Task not found", success: false });
    }
    return res.status(201).json({ message: "Task updated successfully", task, success: true });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" , error:error, success: false });
  }
};

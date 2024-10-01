import mongoose from "mongoose";
const taskSchema = new mongoose.Schema(
    {
      task: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );
  
  export const taskList = mongoose.model("taskList", taskSchema);
  

  
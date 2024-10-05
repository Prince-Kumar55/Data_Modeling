import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema
(
    { 
        contant: {
            type: String,
            required: true
        },
        complete: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        }    
    }, { timestamps: true })

export const SubTodo = mongoose.model("SubTodo", subTodoSchema)
/* "subTodos" jo upper mongoose.model k baad bracket likha hai ("SubTodo") vo
mongodb me plural or small banke save hota hai 
for example: "SubTodo" = subtodos*/
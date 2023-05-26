import express,{Router} from "express";
import { addTodo,getAllTodos,updateTodo,toggleTodoDone,deleteTodo } from "../controllers/todo-controller.js";

const route=express.Router();

route.post('/todos',addTodo)
route.get('/todos',getAllTodos);
route.get('/todos/:id',toggleTodoDone);
route.put('/todos/:id',updateTodo);
route.delete('/todos/:id',deleteTodo);

export default route;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODO = [];
const createTodo = (req, res) => {
    const text = req.body.text;
    //   const text = (<{ text: string }>req.body).text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODO.push(newTodo);
    res.status(201).json({
        message: `Todo created successfully ${newTodo}`,
    });
};
exports.createTodo = createTodo;
const getTodos = (req, res) => {
    res.status(200).json({
        message: "Todos fetched successfully",
        todos: TODO,
    });
};
exports.getTodos = getTodos;

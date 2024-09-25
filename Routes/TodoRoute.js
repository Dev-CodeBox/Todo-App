const express = require("express");
const router = express.Router();

const { createTodo } = require("../Controllers/CreateTodo");
const { getTodo } = require("../Controllers/GetTodo");
const { getTodoById } = require("../Controllers/GetTodo");
const { updateTodo } = require("../Controllers/UpdateTodo");
const { deleteTodo } = require("../Controllers/DeleteTodo");

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;

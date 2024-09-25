const Todo = require("../Models/TodoSchema");

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const response = await Todo.create({ title, description });
    res.status(200).json({
      sucess: true,
      message: "Todo Created Sucessfully",
      data: response,
    });
  } catch (error) {
    console.error(error);
    console.error(error.message);
    res.status(500).json({
      success: false,
      data: "inernal server error",
      message: error.message,
    });
  }
};

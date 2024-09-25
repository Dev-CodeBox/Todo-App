const Todo = require("../Models/TodoSchema");

exports.getTodo = async (req, res) => {
  try {
    const response = await Todo.find({});
    res.status(200).json({
      sucess: true,
      message: "All Todo Found",
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

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Todo.findById({ _id: id });
    res.status(200).json({
      sucess: true,
      message: `${id} Todo Found`,
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

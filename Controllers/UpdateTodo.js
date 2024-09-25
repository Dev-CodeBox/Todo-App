const Todo = require("../Models/TodoSchema");

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const response = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );
    res.status(200).json({
      sucess: true,
      message: `${id} Updated Sucessfully`,
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

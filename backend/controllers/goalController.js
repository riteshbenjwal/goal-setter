const asyncHandler = require("express-async-handler");

// @desc Get Goals
//@route GET /api/goals
//@acess Private

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get Goals",
  });
});

// @desc Set Goals
//@route Set /api/goals
//@acess Private

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({
    message: "Set Goal",
  });
});

// @desc Update Goals
//@route Put /api/goals/:id
//@acess Private

const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Update Goal ${req.params.id}`,
  });
});

// @desc Delete Goals
//@route Delete /api/goals/:id
//@acess Private

const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Delete Goal ${req.params.id}`,
  });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};

// @desc Get Goals
//@route GET /api/goals
//@acess Private

const getGoals = (req, res) => {
  res.status(200).json({
    message: "Get Goals",
  });
};

// @desc Set Goals
//@route Set /api/goals
//@acess Private

const setGoals = (req, res) => {
  res.status(200).json({
    message: "Set Goal",
  });
};

// @desc Update Goals
//@route Put /api/goals/:id
//@acess Private

const updateGoals = (req, res) => {
  res.status(200).json({
    message: `Update Goal ${req.params.id}`,
  });
};

// @desc Delete Goals
//@route Delete /api/goals/:id
//@acess Private

const deleteGoals = (req, res) => {
  res.status(200).json({
    message: `Delete Goal ${req.params.id}`,
  });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals
};

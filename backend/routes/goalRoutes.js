const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoals);

router.route("/:id").put(updateGoals).delete(deleteGoals);

module.exports = router;























//One way is using above syntax and one is given below

// router.get("/", getGoals);

// router.post("/", setGoals);

// router.put("/:id", updateGoals);

// router.delete("/:id", deleteGoals);

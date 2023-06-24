const express = require("express");
const router = express.Router();
const {
  registerActivity,
  editActivity,
  deleteActivity,
  getActivities,
  getActivity,
} = require("../controllers/activitiesController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, registerActivity);
router.put("/", protect, editActivity);
router.delete("/", protect, deleteActivity);
router.get("/", protect, getActivities);
router.get("/activity", protect, getActivity);

module.exports = router;

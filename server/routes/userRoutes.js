const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  editUser,
  deleteUser,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.put("/", protect, editUser);
router.delete("/", protect, deleteUser);

module.exports = router;

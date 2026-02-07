const express = require("express");
const {
  getMessages,
  createMessage,
  deleteMessage,
  markAsRead
} = require("../controllers/messageController");

const router = express.Router();

router.get("/", getMessages);
router.post("/", createMessage);
router.delete("/:id", deleteMessage);
router.put("/:id/read", markAsRead);

module.exports = router;

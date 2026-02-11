const router = require("express").Router();
const Message = require("../models/Message");
const auth = require("../middleware/authMiddleware");

// Get Dashboard Stats
router.get("/stats", auth, async (req, res) => {
  try {
    const totalMessages = await Message.countDocuments();
    const unreadMessages = await Message.countDocuments({ isRead: false });

    res.json({
      totalMessages,
      unreadMessages
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get All Messages
router.get("/messages", auth, async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Delete Message
router.delete("/messages/:id", auth, async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ msg: "Message deleted" });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Mark as Read
router.put("/messages/:id", auth, async (req, res) => {
  try {
    await Message.findByIdAndUpdate(req.params.id, { isRead: true });
    res.json({ msg: "Marked as read" });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;

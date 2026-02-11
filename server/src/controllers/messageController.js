const Message = require("../models/Message");

// Get all messages
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete message
exports.deleteMessage = async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mark as read
exports.markAsRead = async (req, res) => {
  try {
    await Message.findByIdAndUpdate(req.params.id, { isRead: true });
    res.json({ message: "Message marked as read" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

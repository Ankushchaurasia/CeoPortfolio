const Message = require("../models/Message");

exports.getMessages = async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
};


exports.createMessage = async (req, res) => {
  const message = await Message.create(req.body);
  res.status(201).json(message);
};

exports.deleteMessage = async (req, res) => {
  await Message.findByIdAndDelete(req.params.id);
  res.json({ message: "Message deleted" });
};

exports.markAsRead = async (req, res) => {
  const message = await Message.findByIdAndUpdate(
    req.params.id,
    { status: "Read" },
    { new: true }
  );
  res.json(message);
};

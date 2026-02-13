const Contact = require("../models/Contact");


const createContact = async (req, res) => {

  try {

    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill required fields"
      });
    }

    
    const contact = await Contact.create({
      name,
      email,
      company,
      message
    });

    res.status(201).json({
      success: true,
      message: "Message saved successfully",
      data: contact
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error"
    });

  }

};


module.exports = {
  createContact
};

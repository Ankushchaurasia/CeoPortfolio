require("dotenv").config();
const bcrypt = require("bcryptjs");
const connectDB = require("./src/config/db");
const Admin = require("./src/models/Admin");

connectDB();

const createAdmin = async () => {
  try {
    const existingAdmin = await Admin.findOne({ email: "admin@gmail.com" });

    if (existingAdmin) {
      console.log("Admin already exists ");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await Admin.create({
      email: "admin@gmail.com",
      password: hashedPassword,
    });

    console.log("Admin Created Successfully ");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createAdmin();

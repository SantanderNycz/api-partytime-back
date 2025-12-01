import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.log(err));

const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://santandernycz:S7TB8OUYUFGDN4Bm@cluster0.rvhc5n1.mongodb.net/?appName=Cluster0"
    );
    console.log("Database connected");
  } catch (error) {
    console.log(`Error ${error}`);
  }
}

module.exports = main;


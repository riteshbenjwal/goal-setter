const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

connectDB();

//Import route

const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running at ${port}`));

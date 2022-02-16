const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

//Import route

const goalRoutes = require("./routes/goalRoutes");

const app = express();
app.use("/api/goals", goalRoutes);

app.listen(port, () => console.log(`Server is running at ${port}`));

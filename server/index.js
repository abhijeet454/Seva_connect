require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const { errorHandler, notFound } = require("./middlewares/errorHandler");

// Route imports
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const equalPayRoutes = require("./routes/equalPay");

const app = express();

// Database connection
connection();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/equal-pay", equalPayRoutes);

// Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
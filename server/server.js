const express = require("express");
const bodyParser = require("body-parser");
const colors = require("colors");
const app = express();
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const PORT = process.env.PORT || 4001;

app.get("/", (request, response) => {
  response.json({ info: "Projekt zaliczeniowy TI" });
});

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/activities", require("./routes/activitiesRoutes"));

app.post(
  "/api/validate",
  asyncHandler((req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      res.status(200).json(true);
    } catch (error) {
      res.status(400).json(false);
    }
  })
);

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} on port: ${PORT}`.yellow.bold
  )
);

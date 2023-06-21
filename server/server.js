const express = require("express");
const bodyParser = require("body-parser");
const colors = require("colors");
const app = express();
const dotenv = require("dotenv").config();

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

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} on port: ${PORT}`.yellow.bold
  )
);

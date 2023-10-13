require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./routers/userRoute");
const http = require("http");
const port = process.env.PORT || "8003";
const app = express();

const server = http.createServer(app);
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://192.168.1.16:5500",
    methods: ["GET", "POST"],
  })
);
app.use("/api", userRoute);
server.listen(port);

server.on("listening", () =>
  console.log(`Server is listening on port http://localhost:${port}`)
);

server.on("error", () => console.log(`Server is not listening`));

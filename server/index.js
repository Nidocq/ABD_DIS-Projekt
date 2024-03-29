const express = require("express");
const { Server } = require("socket.io");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("./routers/authRouter");
const session = require("express-session");
const server = require("http").createServer(app);
require("dotenv").config();
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: "true",
  },
});

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);


// checking for null, ran into an issue if COOKIE_SECRET is not set
// an error will be thrown. then default value will just be "secretValue"
const secretEmpty = true;
if (process.env.COOKIE_SECRET) { 
  const secretEmpty = false;
}

app.use(express.json());
app.use(
  session({
    secret: secretEmpty === false ? process.env.COOKIE_SECRET : "secretValue",
    credentials: true,
    name: "sid",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.ENVIRONMENT === "production" ? "true" : "auto",
      httpOnly: true,
      expires: 1000 * 60 * 60 * 24 * 7,
      sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax",
    },
  })
);
app.use("/auth", authRouter);

io.on("connect", socket => {});

server.listen(3001, () => {
  console.log("Server listening on port 3001");
});
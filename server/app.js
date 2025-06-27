//loading environment variables from .env file
// import dotenv from "dotenv";
// dotenv.config();

import express from "express";
import session from "express-session";
import ViteExpress from "vite-express";
import { Product, User } from "../db/model.js";
import morgan from "morgan";

const app = express();
const port = "8002";
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({ secret: "ssshhhhh", saveUninitialized: true, resave: false }),
);

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  const user = await User.findOne({
    where: {
      username: username,
      password: password,
    },
  });

  console.log(user);

  if (user) {
    res.json({ user: user });
  } else {
    res.json({ user: null });
  }
});

app.get("/api/products", async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on http://localhost:${port}`),
);

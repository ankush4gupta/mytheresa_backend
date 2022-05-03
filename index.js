const express = require("express");
const app = express();
app.use(express.json());
const MenController = require("./controller/men.controller");
const { register, login } = require("./controller/auth.controller");
const CartController = require("./controller/cart.controller")
// login and registration
app.post("/register", register);
app.post("/login", login);
// for men products

// cart 
app.use("/cart", CartController)
app.use("/men", MenController)
module.exports = app;



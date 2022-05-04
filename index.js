const express = require("express");
const app = express();
app.use(express.json());
const MenController = require("./controller/men.controller");
const { register, login } = require("./controller/auth.controller");
const CartController = require("./controller/cart.controller");
const WoemenController =  require("./controller/women.controller");
// login and registration
app.post("/register", register);
app.post("/login", login);
// for men products
app.use("/men", MenController);
//  for women products
app.use("/women",WoemenController);
// cart 
app.use("/cart", CartController);
module.exports = app;



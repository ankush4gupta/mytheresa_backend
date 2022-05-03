

const mongoose = require("mongoose");
const CartSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "men" }
})
module.exports = mongoose.model("cart", CartSchema);


const mongoose = require("mongoose");
const CartSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    menId: { type: mongoose.Schema.Types.ObjectId, ref: "men" },
    womenId: { type: mongoose.Schema.Types.ObjectId, ref: "women" }

})
module.exports = mongoose.model("cart", CartSchema);
const mongoose = require("mongoose");
const WomenSchema = mongoose.Schema({
    name: { type: String, required: true },
    brandName: { type: String, required: true },
    price: { type: Number, required: true },
    size: [{ type: String }],
    images: {
        img1: { type: String }, img2: { type: String },
        img3: { type: String }, img4: { type: String },
    },
    itemNo: { type: String },
    type: { type: String, required: true },
    color: { type: String, required: true },
    quant: { type: Number, required: true },

})
module.exports = mongoose.model("women", WomenSchema);

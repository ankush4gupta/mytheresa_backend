const express = require("express");

const router = express.Router();
const Cart = require("../models/cart.model");
const Men = require("../models/men.model");
const Women = require("../controller/women.controller")

//  route for to add items to the cart 
router.post("/", async (req, res) => {
    try {
        let cart = await Cart.create(req.body)
        res.status(200).send(cart)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
// route to get all cart document  from the  db 
router.get("/", async (req, res) => {
    try {
        let cart = await Cart.find(req.body).populate({ path: 'menId' }).populate({ path: 'womenId' })
        res.status(200).send(cart)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

// ********************************************************************************

// route for finding cart item for particular user through user id 
router.get("/:userID", async (req, res) => {
    try {
        let cart = await Cart.find({ userId: req.params.userID }).populate({ path: 'menId' }).populate({ path: 'womenId' })
        res.status(200).send(cart)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

// *********************************************************************************

//  route for update cart quant  by using product id 
router.patch("/:productID", async (req, res) => {
    try {
        let cart;
        let men = await Men.findById(req.params.productID).lean().exec();
        console.log(men, "men")
        if (men) {

            men = await Men.findByIdAndUpdate(
                req.params.productID
                , req.body, { new: true });

            cart = await Cart.find({
                productId: req.params.productID
            }).populate({ path: 'menId' }).populate({ path: 'womenId' });
            return res.send(cart)
        }
        let women = await Women.findById(req.params.productID).lean().exec()
        if (women) {

            women = await Women.findByIdAndUpdate(
                req.params.productID
                , req.body, { new: true });

            cart = await Cart.find({
                productId: req.params.productID
            }).populate({ path: 'menId' }).populate({ path: 'womenId' });
            return res.send(cart)
        }


        res.send({ message: "Not able to increse count" })




    } catch (error) {
        res.send({ message: error.message })
    }
})
module.exports = router;
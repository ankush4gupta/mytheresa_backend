const express = require("express");
const router = express.Router();
const Women = require("../models/women.model");



// Route for getting all data 
router.get("", async (req, res) => {
    try {
        const women = await Women.find().lean().exec();
        res.status(201).send(women)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
})

// route for queries;

router.get("/q", async (req, res) => {
    try {
        let women;
        let filter = {};
        if (req.query.color) {
            const color = req.query.color.split(",")
            filter.color = { $in: color }
        }
        if (req.query.type) {
            const type = req.query.type.split(",");
            filter.type = { $in: type };
        }
        if (req.query.brandName) {
            const brandName = req.query.brandName.split(",");
            filter.brandName = { $in: brandName };
        }
        if (req.query.size) {
            const size = req.query.size.split(",");
            filter.size = { $in: size };
        }
        women = await Men.find(filter).lean().exec();
        res.status(201).send(women)
    } catch (error) {
        res.status(500).send({ message: error.message });

    }
})


// Route for particular product

router.get("/:id", async (req, res) => {
    try {
        let women = await Women.findById(req.params.id).lean().exec();
        res.status(201).send(women)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
})


module.exports = router;
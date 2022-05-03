const express = require("express");
const router = express.Router();
const Men = require("../models/men.model");



// Route for getting all data 
router.get("", async (req, res) => {
    try {
        const men = await Men.find().lean().exec();
        res.status(201).send(men)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
})

// route for queries;

router.get("/q", async (req, res) => {
    try {
        let men;
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
        men = await Men.find(filter).lean().exec();
        res.status(201).send(men)
    } catch (error) {
        res.status(500).send({ message: error.message });

    }
})


// Route for particular product

router.get("/:id", async (req, res) => {
    try {
        let men = await Men.findById(req.params.id).lean().exec();
        res.status(201).send(men)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
})


module.exports = router;
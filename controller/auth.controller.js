// const express = require("express");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken")
const newToken = (user) => {
    return jwt.sign({ user }, `${process.env.SECRET_KEY}`);
};

const register = async (req, res) => {
    try {
    
        let user = await User.findOne({ email: req.body.email }).lean().exec();

        //CHECK IF USER ALREADY PRESENT
        if (user) {
            return res.status(400).send("User already exist");
        }
        // creating new user
        user = await User.create(req.body);
        // creating token
        const token = newToken(user)


        return res.send({ user, token });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const login = async (req, res) => {
    try {
        // finding user
        let user = await User.findOne({ email: req.body.email });
        //  If user not found return msg
        if (!user) {
            res.status(400).send({ message: "Please enter valid details" })
        }
        // matching hashed password
        const match = user.checkPassword(req.body.password);
        // If password not matched return msg
        if (!match) {
           return res.status(400).send({ message: "Please enter valid details" });
        }
        // genrating token
        const token = newToken(user);
        // returning success result
        res.status(201).send({ user, token })

    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { register, login } 
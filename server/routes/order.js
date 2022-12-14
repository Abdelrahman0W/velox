const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const { verifyToken, Authorization, authAdmin } = require('../middleware/auth');

//CREATE
router.post("/order", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/order/:id", authAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/order/:id", authAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER ORDERS
router.get("/order/:uid", Authorization, async (req, res) => {
    try {
        const orders = await Order.find({ uid: req.params.uid });
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL
router.get("/order", authAdmin, async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

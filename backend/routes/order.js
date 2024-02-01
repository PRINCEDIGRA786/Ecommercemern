// We will use router here.

const express = require('express')
const router = express.Router()
const Order = require('../models/Order')
const fetchuser = require('../Middleware/fetchUser')
const { body, validationResult } = require('express-validator');


//Route 1: Fetch the whole lists for todo
router.get('/allorders', fetchuser, async (req, res) => {
    const order = await Order.find({ user: req.user.id })
    res.json(order)
})


//Route 2: Add a new list using Post...Login required
router.post('/addorder', fetchuser, async (req, res) => {
    try {
        const { title, image, rating, price } = req.body;
        let ordder = await Order.findOne({ title: title })
        if (ordder) {
            return res.json({ "Success": false })
        }

        const order = new Order({
            title, image, rating, user: req.user.id, price
        })
        const savedOrder = await order.save()

        res.json({ "success": true, order: savedOrder })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// Route 3: This is to upadate the list bro...login required...
router.put('/updatequantity/:id', fetchuser,
    async (req, res) => {
        const { title, quantity } = req.body

        let order = await Order.findById(req.params.id);
        // console.log("order is: ", order)
        if (!order) {
            return res.status(404).send("not found bro")
        }
        if (order.user.toString() !== req.user.id) {
            return res.status(401).send("No Such element in your Cart..")
        }
        // order = await Order.findOne({ title: title });
        await order.updateOne({
            $set: {
                quantity: quantity
            }
        })
        res.send("Done dana done broo...")
    })


//Route 4:This is for the deletion of the note bro:
router.delete('/deleteorder/:id', fetchuser, async (req, res) => {
    try {
        // Find the note to be delete and delete it
        let order = await Order.findById(req.params.id);
        if (!order) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Note
        if (order.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        order = await Order.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Order has been deleted", order: order });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router
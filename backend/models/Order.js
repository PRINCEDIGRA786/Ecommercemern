const mongoose = require('mongoose')
const { Schema } = mongoose;

const OrderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true

    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        // required: true
        default: 1
    }
});

module.exports = mongoose.model('orders', OrderSchema)
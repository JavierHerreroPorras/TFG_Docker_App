const mongoose = require('mongoose');
const hotelSchema = new mongoose.Schema({
    name: {
       type: String,
       required: true
    },
    stars: {
        type: Number,
        default: 1
    },
    url: {
        type: String,
        required: true
    },
    //Easy way to save images by their URL
    imageURL: {
        type: String,
        required: true
    },
    /*
    Another way is to save images with a Buffer type
    */
    singlePrice: {
        type: Number,
        default: 0
    },
    doublePrice: {
        type: Number,
        default: 0
    },
    triplePrice: {
        type: Number,
        default: 0
    },
    averageScore: {
        type: Number,
        default: 0
    },
    partnetship_price: {
        type: Number,
        default: 0
    }
});

const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
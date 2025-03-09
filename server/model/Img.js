const mongoose = require('mongoose');

const imgschema = new mongoose.Schema({
    img: { type: String, required: true }, // Image URL or image file name
});

// Set the collection name explicitly if you want it to be 'img' instead of the default 'imgs'
const Img = mongoose.model('Img', imgschema, 'img'); 

module.exports = Img;

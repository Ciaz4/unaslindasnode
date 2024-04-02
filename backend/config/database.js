const mongoose = require('mongoose');
require('dotenv').config();

const URI = `mongodb+srv://jclondono32:mDjydENUGFdOLYux@cluster0.gaywejc.mongodb.net/cluster0?retryWrites=true&w=majority`
mongoose.connect(URI);

module.exports = mongoose;
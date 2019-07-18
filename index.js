'use strict';

const mongoose = require('mongoose');

// Require your model
const Categories = require('./models-modular/categories/categories.js')
const Products = require('./models-modular/products/products.js')

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

// Connect
mongoose.connect(MONGOOSE_URI);

let food = new Categories();
food.create({name: 'apple', description: 'fruit'})
  .then(data => console.log(data)).catch(err => console.log(err))
// Do some work

// Disconnect
mongoose.disconnect();
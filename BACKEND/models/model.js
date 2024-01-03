const mongoose = require('mongoose');
const canteenmenu = new mongoose.Schema({
  img: String,
  name: String,
  price: Number,
  amount: Number,
  category: String,
  id: Number
});


const Menu = mongoose.model('Menu', canteenmenu);
module.exports = Menu;



//  module.exports={
//     name: String,
//     price: Number,
//     description: String,
//     id:String 
//  };
// export default canteenmenu;

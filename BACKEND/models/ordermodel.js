const mongoose=require('mongoose')
const orderSchema = new mongoose.Schema({
   // ordernum:{
   //    type:Number,
   //    required:true,
   //    unique:false
   // },
   // // email:{
   // //  type:String,
   // //  required:true,
   // //  unique:false
   // // },
   // order_data:{
   //  type: Array,
   //  required:true
   // }
   ordernum:Number,
   userid:String,
   username:String,
   email:String,
   order_data:Array,
   order_date:String,
   price:Number
});
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
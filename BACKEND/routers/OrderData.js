// const express = require("express")
// const app= express.Router();
// const Order=require("../models/ordermodel")
// const checkAuth=require("../middleware/auth-check")
// app.use(checkAuth)
// app.post('/',async(req,res)=>{
//     let data=req.body.order_data
//     // await data.splice(0,0,{Order_date: req.body.order_date})
//     let eId=await Order.findOne({"email":req.body.email})
//     console.log(eId)
//     if(eId===null){
//         try{
//             await Order.create({
//                 email : req.body.email,
//                 order_data:[data]
//             }).then(()=>{
//                 res.json({succes:true})
//             })
//         } catch(error){
//             console.log(error.message)
//             res.send("Server Error",error.message)
//         }
//     } 
//     else{
//         try{
//             await Order.findOneAndUpdate({email:req.body.email},
//                 {$push:{order_data:data}}).then(()=>{
//                     res.json({success:true})
//                 })
//         }catch(error){
//             res.send("Server Error",error.message)
//         }
//     }
// })

// module.exports=app;

let num=7
const express = require("express")
const app= express.Router();
const Order=require("../models/ordermodel")

app.post('/',async(req,res)=>{
    let data=req.body.order_data
    let price=req.body.price
    // await data.splice(0,0,{Order_date: req.body.order_date})
    console.log(req.body.username)
    // let eId=await Order.insertOne({"email":req.body.email})
    // console.log(eId)
    // if(eId===null){
        try{
            // const newitem =new Order({
            //     email : req.body.email,
            //     ordernum:num,
            //     order_data:[data]
            // });
            // console.log(req.body);
            // await newitem.create().then(()=>{
            //     res.json({succes:true})
            // })
            const newitem=new Order({
                userid:req.body.userid,
                                email : req.body.email,
                                order_num:num,
                                order_data:data,
                                price:price,
                                username:req.body.username,
                                order_date:req.body.order_date
                            });
                            await newitem.save().then(()=>{
                                res.json({_id:newitem._id})
                            })
        } catch(error){
            console.log(error.message)
            res.send("Server Error",error.message)
        }
    // } 
    // else{
    //     try{
    //         await Order.findOneAndUpdate({email:req.body.email},
    //             {$push:{order_data:data}}).then(()=>{
    //                 res.json({success:true})
    //             })
    //     }catch(error){
    //         res.send("Server Error",error.message)
    //     }
    // }
})

app.get('/',(req, res) => {
  Order.find({}).then((err, posts) => {
      if (err) {
          res.json(err);
      } else {
          res.json(posts);
      }
  });
})


app.delete("/:nitem",(req, res) => {
    Order.deleteOne({ _id: req.params.nitem }).then(function (err) {
      if (err) {
        res.json("DELETED SUCCESSFULY");
      } else {
        res.json(err);
      }
    })
  
  
  })
module.exports=app;

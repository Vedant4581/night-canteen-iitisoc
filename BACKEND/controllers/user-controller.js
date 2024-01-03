require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const ejs = require("ejs");
const express = require("express")
const app = express.Router();
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt");
const saltRounds=10;
const User=require("../models/usermodel")
const {body,validationResult}=require('express-validator')
const Menu = require("../models/model");

const userget=(req,res)=>{
    Menu.find({}).then((err, posts) => {
      if (err) {
        res.send(err);
      } else {
        res.send(posts);
      }
    });
  }

  const usergetq=(req,res)=>{
    Menu.findOne({
      name: req.params.nitem
    }).then((err, posts) => {
      if (err) {
        res.send(err);
      } else {
        res.send("NO ARTICLE FOUND HERE");
      }
    });
  }

  const userlogin=(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
      
    }
    const username=req.body.email;
    //  if (!username.endsWith('@iiti.ac.in')) {
    //   return res.status(400).json({ error: 'Invalid email format. Only @iiti.ac.in emails are allowed.' });
    // }
    // const password=md5(req.body.password);   BY HASHING
    const password=req.body.password
    User.findOne({email:username}).then(function(foundUser){
      // BY HASHING
      // if(foundUser.password===password)
      // {
        //     res.render("secrets");
        // }
        let token
        bcrypt.compare(password,foundUser.password,function(err,result){
          if(result===true){
            // res.redirect("/home");
            try{
              token = jwt.sign({
              name: foundUser.name,
              email: foundUser.email
          }, process.env.SECRET, {
              expiresIn: '1h',
          })
          } catch (err){
              return (res.json("TRY AGAIN"))
          }
      
          res.json({name: foundUser.name, 
              email: foundUser.email
              ,token: token,userid:foundUser._id} )
          }else{
            res.json("Incorrect email or password")
          }
        })
      
  
    
      
// try{
//     token = jwt.sign({
//     name: foundUser.name,
//     email: foundUser.email
// }, process.env.SECRET, {
//     expiresIn: '1h',
// })
// } catch (err){
//     return (console.log("Signing up failed, please try again", 500))
// }

// res.json({name: foundUser.name, 
//     email: foundUser.email
//     ,token: token} )
    


      //     const user=new User({
        //         username:req.body.username,
        //         password:req.body.password
        //     });
        //     req.login(user,function(err){
          //         if(err){
            //             console.log(err);
//         }else{
//             passport.authenticate("local")(req,res,function(){
//                 res.redirect("/secrets");
//             })
//         }
//     })
}
)


  }

  const userregister=(req,res)=>{
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
   
    const {name,email,password}=req.body
    //  if (!email.endsWith('@iiti.ac.in')) {
    //   return res.status(400).json({ errors: 'Invalid email format. Only @iiti.ac.in emails are allowed.' });

    // }
    bcrypt.hash(req.body.password,saltRounds,async function(err,hash){
      const newUser=new User({
        name:req.body.name,
        email:req.body.email,
        password:hash
      });
      // console.log(req.body)
       await newUser.save().then(console.log("SAVED"))
       console.log({newUser})
       let token
       try{
         token = jwt.sign({
           name: name,
           email:email
          },process.env.SECRET,{expiresIn:'1h'})
          console.log(token)
          res.status(201).json({ name:newUser.name,email:newUser.email,token: token,userid:newUser._id})
        } catch (err){
          (console.log("Signing up failed, please try again", 500))
        }
        
        
      });
      // User.register({username:req.body.username},req.body.password,function(err,user){
        //     if(err){
          //         console.log(err);
          //         res.redirect("/register");
          //     }else{
            //         passport.authenticate("local")(req,res,function(){
              //             res.redirect("/secrets");
              //         })
              //     }
              // })
            
}


module.exports={
    userget,
    usergetq,
    userlogin,
    userregister
}
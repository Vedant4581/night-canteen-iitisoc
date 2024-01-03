const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const ejs = require("ejs");
const express = require("express")
const app = express.Router();

const Menu = require("../models/model");
const Order=require("../models/ordermodel")

const foodget = (req, res) => {
    Menu.find({}).then((err, posts) => {
        if (err) {
            res.json(err);
        } else {
            res.json(posts);
        }
    });
}

const orderget = (req, res) => {
  Order.find({}).then((err, posts) => {
      if (err) {
          res.json(err);
      } else {
          res.json(posts);
      }
  });
}

const foodpost =  async (req, res) => {
    const newitem =new Menu({
        img:req.body.img,
        name: req.body.name,
        category: req.body.category,
        amount: req.body.amount,
        price: req.body.price,
        id: req.body.id
    });
    console.log(req.body);
    await newitem.save();
    console.log("saved");
}

const foodgetq = (req, res) =>{
    Menu.findOne({
      _id: req.params.nitem
    }).then((err, posts) => {
      if (err) {
        res.json(err);
      } else {
        res.json(posts);
      }
    });
  }
const foodgetqn = (req, res) =>{
    Menu.findOne({
      name: req.params.nitem
    }).then((err, posts) => {
      if (err) {
        res.json(err);
      } else {
        res.json(posts);
      }
    });
  }

  const foodput = (req, res) => {
    Menu.updateOne(
      { name: req.params.nitem },
      {
        $set: {
          img:req.body.img,
          name: req.body.name,
          price: req.body.price,
          category: req.body.category,
          id: req.body.id
        }
      },
      { overwrite: true }).then(
        function (err) {
          if (err) {
            res.json(err);
          } else {
            res.json("SUCCESSFULLY UPDATED");
          }
        }
      );
  }

  const foodpatch = (req, res) =>{
    Menu.updateOne(
      { name: req.params.nitem },
      { $set: req.body }).then(
        function (err) {
          if (err) {
            res.json(err);
          } else {
            res.json("SUCCESSFULLY UPDATED");
          }
        }
      );
  }


  const fooddeleteo = (req, res) => {
    Menu.deleteOne({ name: req.params.nitem }).then(function (err) {
      if (err) {
        res.json("DELETED SUCCESSFULY");
      } else {
        res.json(err);
      }
    })
  
  
  }

  const fooddeletea = (req, res) => {
    Menu.deleteMany({}).then(function (err) {
        if (err) {
            res.json("DELETED SUCCESSFULY");
        } else {
            res.json(err);
        }
    });


}






module.exports = {
    foodget,
    orderget,
    foodpost,
    foodgetq,
    foodgetqn,
    foodput,
    foodpatch,
    fooddeleteo,
    fooddeletea
}
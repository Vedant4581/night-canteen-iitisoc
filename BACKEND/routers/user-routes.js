// const checkAuth = require("../middleware/auth-check")◘
const { check } = require("express-validator")
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const ejs = require("ejs");
const express = require("express")
const path = require('path');
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt");
const saltRounds=10;
const User=require("../models/usermodel")
const {body,validationResult}=require('express-validator')


const app = express.Router();

const Menu = require("../models/model");
const contuser = require("../controllers/user-controller.js")

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", contuser.userget);


app.get("/:nitem", contuser.usergetq);
//name should not be empty,email should be in the correct format and password should be atleast 6 characters long
const validateEmail = check('email').isEmail().normalizeEmail().custom((value) => {
    if (!value.endsWith('@iiti.ac.in')) {
      throw new Error('Only @iiti.ac.in emails are allowed.');
    }
    return true;
});
registerValidatorSchema=[
    body('name').notEmpty().withMessage('Name is required'),
    validateEmail,
    // body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
]
//email should be in the correct format and password should be atleast 6 characters long
loginValidatorSchema=[
    // body('email').isEmail().withMessage('Invalid email'),
    validateEmail,
    body('password')
      .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
]
app.post("/register",registerValidatorSchema,contuser.userregister);
app.post("/login",loginValidatorSchema, contuser.userlogin)





module.exports = app;
// IMPORTING REQUIRED MODULES

require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const ejs = require("ejs");
const express = require('express');
const path = require('path');
const app = express();
const authRoute = require("./routers/auth");
const foods = require("./routers/food-routes.js");
const users = require("./routers/user-routes.js");
const cors = require("cors");
const passport = require("passport");
// const cookieSession = require("cookie-session");
const session =require( 'express-session')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate=require("mongoose-findorcreate");
const jwt=require("jsonwebtoken")
const multer=require("multer");
const order=require("./routers/OrderData.js")
const keys=require("./keys")

// BY HASHING AND SALTING WITH BCRYPT
const bcrypt=require("bcrypt");
const saltRounds=10;
// import User from './usermodel';


app.use(cors())

app.use(express.json())

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended:true
})
);
app.use("/canteen/food", foods);
app.use("/canteen/user", users);
app.use("/canteen/orders", order);
app.use("/auth", authRoute);

// app.use(
// 	cookieSession({
// 		name: "session",
// 		keys: ["nightcanteen"],
// 		maxAge: 24 * 60 * 60 * 100,
// 	})
// );
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "none",
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7 // One Week
    }
  }))
app.use(passport.initialize());
app.use(passport.session());




const User = require("./models/usermodel.js");


// app.use(
// 	cors({
// 		origin: "http://localhost:3000",
// 		methods: "GET,POST,PUT,DELETE",
// 		credentials: true,
// 	})
// );
// app.post("/auth/google", passport.authenticate("google", ["profile"])
// // (req, res) => {res.json("LOGIN GOOGLE")}
// );
// app.get("/auth/home", passport.authenticate("google"));
// passport.serializeUser((user, done) => {
// 	done(null, user);
// });

// passport.deserializeUser((user, done) => {
// 	done(null, user);
// });
// passport.use(
// 	new GoogleStrategy(
// 		{
// 			clientID: "560528787084-3vs89teui1dglhv8i4t2tt0v9l41vfdv.apps.googleusercontent.com",
// 			clientSecret: "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",
// 			callbackURL: "/auth/google/home",
// 			scope: ["profile", "email"],
// 		},
// 		function (accessToken, refreshToken, profile, callback) {
// 			callback(null, profile);
//       console.log(profile);
// 		}
// 	)
// );


// app.use("/auth", authRoute);


// SELECTING THE PORT
const port = 5000;

// IMPORTING SCHEMA OF FOOD ITEMS FROM "model.js"
const Menu = require("./models/model.js");



app.use(express.static("public"));
app.set('views',path.join(__dirname,'views/pages'));
app.set("view engine","ejs");


app.use(bodyParser.urlencoded({
  extended: true
}));





  const storage=multer.diskStorage({
    destination:function(req,file,cb){
      return cb(null,"./uploads/")
    },
    filename:function(req,file,cb){
      return cb(null,`${Date.now()}-${file.originalname}`)
    }
  })
  const upload=multer({storage})
    // app.use(cors());
  app.post("/upload",upload.single("file"),(req,res)=>{
    console.log(req.file)
    console.log(req.file.path)
     res.json("FILE UPLOADED");
  })
    // main().catch(err => console.log(err));


app.use("/upload",express.static('uploads'));
    
    main().catch(err => console.log(err));





// CONNECTING MONGOOSE AND MONGODB
async function main() {
  await
  //  mongoose.connect('mongodb://127.0.0.1:27017/canteen')
   mongoose.connect("mongodb://127.0.0.1:27017/userDB",{useNewUrlParser:true}).then(() => {
    console.log("Connected to Database");
    app.listen(port);
  }).catch(err => { console.log("Error in connecting to database"); console.log(err) });
  console.log("WE ARE NOW CONNECTED");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}







// DISPLAYING ALL FOOD ITEMS AVAILABLE IN OUR MENU
const menuitems = Menu.find({}).then((err, posts) => {
  if (err) {
    console.error(err);
  } else {
    console.log(posts);
  }
});
console.log(menuitems);


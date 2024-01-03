const router = require("express").Router();
const express = require("express");
const app = express();
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys=require("../keys")
const cors = require("cors");

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);
passport.use(new GoogleStrategy({
	// OPTIONS FOR GOOGLE STRATEGY
	clientID:keys.google.clientID,
	clientSecret: keys.google.clientSecret,
	callbackURL: "http://localhost:3000/user/home/",
	// userProfileURL:"http://www.googleapis.com/oauth2/v3/userinfo",
  scope: ["profile", "email"]
},function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
      console.log(profile);
		}))

// passport.use(
// 	new GoogleStrategy(
// 		{
// 			clientID: "448017787477-1vrrf8btll26g499mietf3i7dvvjd1u6.apps.googleusercontent.com",
// 			clientSecret: "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",
// 			callbackURL: "/auth/google/home",
// 			scope: ["profile", "email"],
		// },
	// 	function (accessToken, refreshToken, profile, callback) {
	// 		callback(null, profile);
    //   console.log(profile);
	// 	}

// 	)
// );

// passport.use(new GoogleStrategy({
// 	// OPTIONS FOR GOOGLE STRATEGY
// 	clientID:keys.google.clientID,
// 	clientSecret: keys.google.clientSecret,
// 	callbackURL: "/user/home",
// },()=>{
// 	// FUNCTION OF PASSPORT CALLBACK
// }))

router.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Logged In",
			user: req.user,
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});

router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});

// router.get("/google", passport.authenticate("google", ["profile", "email"])
// // (req, res) => {res.json("LOGIN GOOGLE")}
// );

router.get(
	"/user/home",
	passport.authenticate("google", {
		successRedirect: "http://localhost:3000/user/home/",
		failureRedirect: "/login/failed",
	}), (req, res) => {res.redirect("/user/home/")}
);
router.post("/google", passport.authenticate("google", ["profile"])
// (req, res) => {res.json("LOGIN GOOGLE")}
);
// router.get("/home", passport.authenticate("google"));
router.get("/logout", (req, res) => {
	req.logout();
	res.redirect("http://localhost:3000/");
});

module.exports = router;

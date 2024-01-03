const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const findOrCreate = require('mongoose-findorcreate');
// const userSchema = new mongoose.Schema ({
//     email: String,
//     password: String,
//     googleId: String,
//   });
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
    }
    // ,
    // image: {
    //   type: String,
    //   required: true,
    // googleId:{
    //     type: String
    // }  
    // },

  });
// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);
userSchema.plugin(uniqueValidator)
const User = new mongoose.model("User", userSchema)
// passport.use(User.createStrategy());
// User.createIndexes();
module.exports = User
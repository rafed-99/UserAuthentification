const mongoose = require('mongoose');
const{ isEmail } = require('validator');

const userSchema = new mongoose.Schema({

    firstname : { 
        type:String , 
        required:[true , "Please enter the firstname"], 
        minLength:[2 , "Please respect the min firstname length"] , 
        maxLength:[20 , "Please respect the max firstname length"]
    },
    lastname : { 
        type:String ,
        required:[true , "Please enter the lastname"] , 
        minLength:[2 , "Please respect the min lastname length"] , 
        maxLength:[20 , "Please respect the max lastname length"]
    },
    email : { 
        type:String, 
        required:[true , "Please enter the email"] , 
        unique:true , 
        lowercase:true,
        validate:[isEmail , "Please enter a valid email"]
    },
    password : { 
        type:String , 
        required:[true , "Please enter the password"] , 
        minLength:[4 , "Please respect the min password length"] 
    }

})

const User = mongoose.model("User",userSchema);
module.exports = User;
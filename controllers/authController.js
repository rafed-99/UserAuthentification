const User = require('../models/User');

//handle errors
const handleErrors = (err) =>{
    console.log(err.message,err.code);
};

const SignupGet = (req,res) => {
    res.render("sign up");
}

const LoginGet = (req,res) => {
    res.render("login");
}

const SignupPost = async (req,res) => {
    const {firstname,lastname,email,password} = req.body;
    try{
        const user = await User.create({firstname,lastname,email,password});
        res.send(user);
    }
    catch(err){
        handleErrors(err);
        res.send(err);
    }
}

const LoginPost = async (req,res) => {
    const {email,password} = req.body;
    console.log(email,password);
    res.send("login success");
}


module.exports = {SignupGet,LoginGet,SignupPost,LoginPost}
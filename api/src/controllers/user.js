const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
    async loginUser(req, res){
        try{    
            res.send("User created");
        }catch(err){
            res.send(err);
        }
    },
    async createNewUser(req, res){
        try{
            // Check email for existence
            let user = await User.findOne({email: req.body.email});
            if(user){
                res.send({
                    message: "User is already exist"
                })
            }else{
                let newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                });
                // Hash password 
                let salt = await bcrypt.genSalt(10);
                let hash = await bcrypt.hash(newUser.password, salt);

                newUser.password = hash;

                // Save new user
                await newUser.save();

                res.send({
                    message: "Register new User"
                });
            }
        }catch(err){
            res.status(400).send({
                error: "createNewUser Error"
            })
        }
    }
}
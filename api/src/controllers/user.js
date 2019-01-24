const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const config = require('../config/config');

module.exports = {
    async loginUser(req, res){
        try{
            let user = await User.findOne({ email: req.body.email });
            if(user){
                let password = await bcrypt.compare(req.body.password, user.password);
                if(!password){
                    throw "Incorrect password"
                }else{
                    const token = jwt.sign({
                        email: user.email,
                        id: user._id
                    },
                        config.secret,
                    {
                        expiresIn: '7d'
                    });
                    return res.send({
                        user: {
                            username: user.username,
                            email: user.email,
                            image: user.image,
                            id: user._id,
                            favorites: user.favorites
                        },
                        token: token
                    });
                }
            }else{
                throw "Incorrect user"
            }
        }catch(err){
            res.send({error: err});
        }
    },
    async createNewUser(req, res){
        try{
            // Check email for existence
            let user = await User.findOne({email: req.body.email});
            if(user){
                throw "User is already exist"
            }else{
                let newUser = new User({
                    username: req.body.username,
                    image: req.body.image,
                    email: req.body.email,
                    password: req.body.password,
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
            res.send({error: err});
        }
    }
}
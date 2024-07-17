const express = require("express");
const router = express.Router();
const User = require("../models/User");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const jwt_secret = process.env.JWT_TOKEN;

router.post("/createuser", async (req, res) => {
  try {
    let success = false;
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ success, errors: "User Already Exist" });
    }
    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPassword,
    });
    const data = {
      user: {
        id: user.id,
      },
    };

    const authToken = jwt.sign(data, jwt_secret);
    success = true;
    res.json({ success, authToken });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/login',async(req,res)=>{
    try{
        let success = false;
        let user = await User.findOne({email: req.body.email});
        if(!user){
          return res.status(400).json({success, errors:"Invalid Credentials"})
        }
        let psswdchk = await bcrypt.compare(req.body.password,user.password);
        if(!psswdchk){
          return  res.status(400).json({success, errors:"Invalid Credentials"})
        }
        const data = {
            user:{
                id: user.id,
            },
        };
        const authToken = jwt.sign(data,jwt_secret);
        success = true;
        res.json({success, authToken});
    }catch(error){
        res.status(500).send({error})
    }
})

module.exports = router;
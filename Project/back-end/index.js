const express = require("express");
const cors = require('cors');
require('./db/config')
const User = require('./db/User');
const app = express();
const Jwt = require('jsonwebtoken');
const jwtKey = 'Code-A-Line';
app.use(cors());
app.use(express.json());
app.post('/register', async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    Jwt.sign({ result }, jwtKey, { expiresIn: "1h" }, (err, token) => {
        if (err) {
            res.send({ result: "Something went wrong please try again" })
        }
        res.send({ result, auth: token })
    })
})

app.post('/login',async (req, res) => {

    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            Jwt.sign({ user }, jwtKey, { expiresIn: "1h" }, (err, token) => {
                if (err) {
                    res.send({ result: "Something went wrong please try again" })
                }
                res.send({ user, auth: token })
            })

        }
        else {
            res.send({ result: "No user found" });
        }
    }
    else {
        res.send({ result: "Please enter correct email or password" });
    }
})

app.get('/producter/:email', async (req, res) => {
    let result = await User.find({email:req.params.email});
    console.log(result);
    res.send(result);
})
function verifyToken(req, res, next) {
    let token = req.headers['authorization'];
    if (token) {
        token = token.split(' ')[1];
        // console.log("middleware called", token);
        Jwt.verify(token, jwtKey, (err, valid) => {
            if (err) {
                res.status(401).send({ result: "Please enter a valid token with header" })
            }
            else {
                next();
            }
        })
    }
    else {
        res.status(403).send({ result: "Please enter a token with header" })
    }

}
app.listen(5000);


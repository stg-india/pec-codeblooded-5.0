const User = require("../../model/UserCredential");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config()

const handleLogin = async (req, res) => {
  console.log(req.body);
  const { name, password, email } = req.body;
  if (!name || !password || !email) return res.sendStatus(401)

  let foundUser = await User.findOne({ email: email });

  if (!foundUser) return res.sendStatus(401); //unauthorized

  const match = await bcrypt.compare(password, foundUser.password);
  if (match) { 
    
    const accessToken = jwt.sign(
      {
        email: foundUser.email,
        name: foundUser.name
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10m" }
    );
    const refreshToken = jwt.sign(
      {
        email: foundUser.email,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    await User.updateOne({ _id: foundUser['_id'] }, { refreshToken: refreshToken }, { runValidators: true })
    
    res.cookie("jwt", refreshToken, {
      secure: true,
      httpOnly: true,
      sameSite: "none",
    });
    res.json({ accessToken, email:foundUser.email }); 
  }
  else {
    res.sendStatus(401); 
  } 
} 

module.exports = handleLogin;
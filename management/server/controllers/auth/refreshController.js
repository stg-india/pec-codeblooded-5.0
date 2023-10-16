const jwt = require('jsonwebtoken');
const UserDB = require('../../model/UserCredential');

const refreshJWT = (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);

    const refreshToken = cookies.jwt;
    const foundUser = UserDB.find({ refreshToken: refreshToken });
    if (!foundUser) return res.sendStatus(403);
    
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.sendStatus(403);

        const accessToken = jwt.sign(
          { email: decoded.email, user: decoded.user },
          "afdf543asg34r2f498af",
          { expiresIn: "15m" }
        );

        res.json({ email: decoded.email, accessToken });
      }
    );
}

module.exports = refreshJWT;
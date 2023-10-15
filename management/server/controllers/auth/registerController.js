const bcrypt = require("bcrypt");
const User = require("../../model/UserCredential");

const handleNewUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: "New User Data is Incomplete" });

  const duplicate = await User.findOne({ email: email });
  if (duplicate) return res.sendStatus(409); //conflict

  try {
    //encrypt
    const hashedPass = await bcrypt.hash(password, 10);

    //store the new user
    const newUser = {
      name: name,
      email: email,
      password: password,
    };
    await User.create(newUser);

    console.log(newUser);
    res.status(200).json(newUser);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
};

module.exports = { handleNewUser };

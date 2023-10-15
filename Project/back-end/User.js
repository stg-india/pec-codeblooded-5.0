const mongoose =  require('mongoose');
const Users=new mongoose.Schema({
    username:String,
    email: String,
    password: String
})

module.exports = mongoose.Model('users',Users);
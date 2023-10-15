const connect = require("./dbConnect1");
const express=require('express');
const mongoose = require('mongoose');
const connect = mongoose.connect()
const app=express();
const main= async()=>{
    let data = await connect();
    let result = await data.find().toArray();
    console.log(result);
}
main();

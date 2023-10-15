const express = require('express');
const App = express();
const cors = require('cors');
require('dotenv').config();
const corsOptions= require('./config/corsOptions')
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const connectDB = require('./config/dbConnect');
const registerRouter = require('./routes/auth/register');
const loginRouter = require('./routes/auth/login');
const refreshRouter= require('./routes/auth/refresh')
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');

connectDB();

App.use(express.json());
App.use(express.urlencoded({ extended: false }));
App.use(cookieParser());
App.use(cors(corsOptions));
App.use('/signup', registerRouter);
App.use('/login', loginRouter);
App.use('/refresh', refreshRouter);
App.use(verifyJWT);
App.use('/', require('./routes/AppRoute/router'));
mongoose.connection.once('open', async () => {
    console.log('Connected To MONGODB');
    App.listen(PORT, () => {
        console.log('Listening on Port ', PORT)
    })
})



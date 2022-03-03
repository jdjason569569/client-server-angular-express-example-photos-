"use strict";
const mongoose = require('mongoose');
require('dotenv').config({ path: 'vars.env' });
const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
        });
        console.log('databse is connected');
    }
    catch (error) {
        console.log(error);
        process.exit(1); //  Detener la app
    }
};
module.exports = conectarDB;

const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async ()=>{
    try{
        await mongoose.connect(process.env.dbConnectionStr);
        console.log('Database connected successfully');
    }catch(error){
        console.log('DB connection error :', error);
    }
}

module.exports = dbConnect;
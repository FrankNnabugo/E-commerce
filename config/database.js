const mongoose = require("mongoose");


const database = async()=>{
    try{
       await mongoose.connect(process.env.MONGO_URL, {
        connectTimeoutMS:2000000
       });
       console.log("Database connected");
    }

    catch(err){
        console.error("error connecting to database:", err);
    }
}

module.exports ={database};
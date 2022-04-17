const mongoose = require('mongoose');

const uri = "mongodb+srv://digihack:mircea1234@cluster0.xoxcu.mongodb.net/cluster0?retryWrites=true&w=majority";


  
const connectDB=async()=>{
    try{
const conn=await mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
console.log("MongoDB  is connected!")

    }catch(error){
        console.log(`err`,error)
        process.exit(`Error server : ${error.message}`)
    }
}


module.exports=connectDB

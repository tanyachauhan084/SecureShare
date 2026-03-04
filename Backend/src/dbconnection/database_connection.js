import mongoose from "mongoose";

const DB_Connection= async()=>{
try{
   await mongoose.connect(process.env.MONGO_URI);
   console.log("dataBase is connected now");
   

}

catch(err){
console.log("connection failed");
process.exit(1);
}
}

export default DB_Connection;
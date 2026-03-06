import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema= new mongoose.Schema(
    
    {
    fullName:{
        type:String,
        required:[true, "It is a required field"],
        minlength: [2, "It should atleast have 2 letters"],
        maxlength: [20, "it can atmost have 20 characters"],
        trim:true,
        
    },

    email:{
        type:String,
        required:[true, "It is a required field"],
        unique:true,
        index:true,
        lowercase: true,
        trim:true

    },

    password:{
        type:String,
        required: [true, "It is a required field"],
        trim:true,
        



    },

    
},

{timestamps:true}




)

 

 //User->users , the collection in the database, users.

 //for password hashing
 userSchema.pre("save", async function(){

    if(!this.isModified("password")){
        return;
    }

   this.password= await bcrypt.hash(this.password, 10);
   
 })

 const User= mongoose.model("User", userSchema); // It is a compilled version of the dattabase itslef, which interacts with the database;

 export default User;


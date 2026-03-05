import User from "../models/user.model.js";
import { ApiError } from "../utils/Api-error";
import ApiResponse from "../utils/Api-response";
import async_handler from "../utils/async_handler.js";

const registerUser= async_handler(async(req, res)=>{

   const {fullName, email, password}= req.body;
//check if the user with the provided emailid already exists or not//
   const user= await User.findOne({email});

   //if user already exist, throw the error
   if(user){

    throw new ApiError(
        "An error occured",
        409,
        "User with this emailid already exists in the database, please check"
    )

   }

   //if the user does not exist with this email id, then register

   const createdUser= await User.create({
    fullName,
    email,
    password
   })


   await createdUser.save({validateBeforeSave: false});
   //if the user is not created after this, thorw an error.,

   if(!createdUser){

    throw new ApiError(
        "An error occured",
        500,
        "something went wrong while registering user, please try again"

    )



}

    return res.status(200).json(
        new ApiResponse(
            createdUser,
            200,
            "User registered successfully"
        )
    )


   

})

export  {registerUser};
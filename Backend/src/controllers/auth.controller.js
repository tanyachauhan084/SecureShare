import User from "../models/user.model.js";
import passwordVerification from "../services/passwordVerification.services.js";
import { generateAccessTokens, generateRefreshToken } from "../services/tokens.services.js";
import { ApiError } from "../utils/Api-error.js";
import ApiResponse from "../utils/Api-response.js";
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

   //if the user does not exist with this email id, then register//


   //create user saves authomatically, redo might give issues//
   const createdUser= await User.create({
    fullName,
    email,
    password
   })


  
   //if the user is not created after this, thorw an error.,

   if(!createdUser){

    throw new ApiError(
        "An error occured",
        500,
        "something went wrong while registering user, please try again"

    )}

   

   const AccessToken= await generateAccessTokens(createdUser);
   const RefreshToken = await generateRefreshToken(createdUser);


    createdUser.refreshToken= RefreshToken;

    await createdUser.save({validateBeforeSave:false});

    const options={
         httpOnly: true,
            secure:true,
           
    }

    

     const registeredUser= await User.findById(createdUser._id).select("-password");

    return res.status(201)
            .cookie("accessToken", AccessToken, options)
            .cookie("refreshToken", RefreshToken, options)
            .json(
        new ApiResponse(
            { registeredUser, AccessToken, RefreshToken},
            201,
            "User registered successfully"
        )
    )


   

})

//login controller

const loginUser= async_handler(async(req,res)=>{

//login->email, password

 const {email, password}= req.body;

 //check if there is an existing user with this emailid//

 const user= await User.findOne({email});


 //the user does not exist with the given emailid
 if(!user){
    //an instance of Apierror
    throw new ApiError(
            "An error occured",
            404, //NOT FOUND
            "No user exists with this emailId, try with a different emailId"

    )
}


//if the user exist with that emailid, then validate and verify the password wiht hashed password stored in the dtaabase;;//

const isMatch= passwordVerification(password, user.password);

//if password is not verified//
if(!isMatch){

    throw new ApiError(

        "An error occured",
        401, //UNAUTHORIZED REQUEST
        "Incorrect password, try again"
    )
}

//if password is a match, if ture, so now we know that the user exists in the db, it is an already register user in  database//

const loggedInUser= await User.findById(user._id).select("-password");

return res.status(201).json(
    new ApiResponse(
        loggedInUser,
        201,
        "User successfully logged In"
    )
)

})

export  {registerUser, loginUser};
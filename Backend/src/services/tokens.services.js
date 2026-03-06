//access topken //regresh trokens

import jwt from "jsonwebtoken";


const generateAccessTokens= (user)=>{

  return jwt.sign(
        {
        //payload
      id: user._id,
       email: user.email
        },
       
    

    process.env.ACCESS_TOKEN_SECRET,

    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY}



    )
}

const generateRefreshToken= async(user)=>{

    return jwt.sign(
        {

            //payload info
            id:user._id,
            email: user.email
        },

        process.env.REFRESH_TOKEN_SECRET,

        {expiresIn: process.env.REFRESH_TOKEN_EXPIRY}
    )
}



export {generateAccessTokens, generateRefreshToken};
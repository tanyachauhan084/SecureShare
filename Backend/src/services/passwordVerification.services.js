

import bcrypt from "bcrypt";
const passwordVerification= async(password, hashedPassword)=>{

     //it will return a booleean, true if the password is verified, false, if the password is not verified..//
     return await bcrypt.compare(password, hashedPassword); //return a boolean value;
}

export default passwordVerification;

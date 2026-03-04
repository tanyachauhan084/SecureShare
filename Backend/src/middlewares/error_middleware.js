import { ApiError } from "../utils/Api-error.js"

const errorMiddleware= (err,req,res,next)=>{

    if(err instanceof ApiError){
        return res.status(err.statuscode).json(
           {
                sucess:false,
                statuscode:err.statuscode,
                message: err.message

           }
            
        )
    }

    // this is an error middle, so you not have to return an error,onlyy you can either use noting just return res or use the Apiresponse..//
    //obv error middelware does not return another error, it resolves error and it already has an error which an either be thei nsatance of Apierror or a random diff error//
    return res.status(400).json(
      {
           data:"it is an error",
           statuscode:500,
            message: "something went wrong"

      }
        
    )

}

export default errorMiddleware;
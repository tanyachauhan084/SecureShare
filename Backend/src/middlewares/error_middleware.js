import { ApiError } from "../utils/Api-error.js"

const errorMiddleware= (err,req,res,next)=>{

    if(err instanceof ApiError){
        return res.status(err.statuscode).json(
            new ApiError(
                err.data,
                err.statuscode,
                err.message
            )
        )
    }

    return res.status(400).json(
        new ApiError(
            "this is an error",
            400,
            "something wnet wrong",
        )
    )

}

export default errorMiddleware;
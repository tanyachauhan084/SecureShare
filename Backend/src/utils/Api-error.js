class ApiError extends Error{
    constructor(
        data,
        statuscode,
        message,
        errors=[],
        stack=""
    ){

        this.data=data;
        this.statuscode=statuscode;
        this.message=message;
        this.success=false;
        this.errors= errors;

        if(stack){
            this.stack= stack;
        }

        else{
        Error.captureStackTrace(this, this.constructor);
        }
        
        
    }
}


export {ApiError};
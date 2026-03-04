class ApiResponse{

    constructor(data, statuscode,message ){
       this.data=data;
       this.statuscode=statuscode,
        this.message= message
        if(statuscode>400){  //if statuscode is more than 400, it won't be successfull, it will be the error
            this.success=false; //we know that when it is an error , there success will alwasy be the false in here there here there
        }

        else{
            this.success=true; //if the statuscode is less than 400, then success will be true;
        }
    }
}


export default ApiResponse;


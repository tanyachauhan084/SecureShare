import ApiResponse from "../utils/Api-response.js"

const healthcheck= (req,res)=>{

    return res.status(200).json(

        new ApiResponse(
            "this is a healthcheck",
            200,
            "everything is great here"
        )
    )

}

export default healthcheck;
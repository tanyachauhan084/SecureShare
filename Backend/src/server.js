import dotenv from "dotenv"
import app from "./app.js";

import DB_Connection from "./dbconnection/database_connection.js";

dotenv.config(); //just do it once in the wholde wide project


const PORT= process.env.PORT || 8080;


DB_Connection()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server is listening");
})

})

.catch((errors)=>{
    console.log(errors);
})
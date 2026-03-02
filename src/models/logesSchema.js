import mongoose from "mongoose";


const logSchema = mongoose.Schema(
    {
        "table": String,
        "date": Date,
        "query": String
    }, 
    { _id: false } 
);


export const logSchemaModel = mongoose.model(
    "Logs",  
    logSchema  
);

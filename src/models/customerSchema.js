import mongoose from "mongoose";


const productsSchema = mongoose.Schema(
    {
        "productSku": String,
        "productName": String,
        "quantity": Number,
        "unitPrice": Number,
        "totalValue": Number
    }, 
    { _id: false } 
);

const orderHistorySchema = mongoose.Schema(
    {
        "orderId": String,
        "date": Date,
        "products": [productsSchema] 
    }, 
    { _id: false }
); 


const CustomerSchema = mongoose.Schema(
    {
        "customerEmail": String,
        "customerName": String,
        "orderHistory": [orderHistorySchema]
    }, 
    { _id: false }
);

export const customerSchema = mongoose.model(
    "UserOrders",  
    CustomerSchema  
);
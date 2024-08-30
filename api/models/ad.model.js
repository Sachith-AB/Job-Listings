import mongoose from "mongoose";

const adSchema = new mongoose.Schema(
    {
        // userId:
        // {
        //     type:String,
        //     required:true
        // },
        title:
        {
            type:String,
            required:true
        },
        image:
        {
            type:String, 
            required:true,
            default:"https://www.threeriversmi.org/wp-content/uploads/Hiring_PTclerk-cashier.png"
        },


    },
    {timestamps: true}
);
const Ad =mongoose.model('Ad',adSchema);
export default Ad;
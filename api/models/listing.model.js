import mongoose, { Mongoose } from "mongoose";

const listingSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        description:{
            type:String,
            required: true,
        },
        location:{
            type:String,
            required: true,
        },
        rentAmount:{
            type:Number,
            required: true,
        },
        bedrooms:{
            type:Number,
            required: true,
        },
        bathrooms:{
            type:Number,
            required: true,
        },
        parking:{
            type:Boolean,
            required: true,
        },
        deposit:{
            type:Boolean,
            required: true,
        },
        imageUrls:{
            type:Array,
            required: true,
        },
        userRef:{
            type:String,
            required: true,
        },
    }, {timestamps: true}
)

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
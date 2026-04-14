import mongoose from "mongoose";



const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true

    },

    credits:{
        type:Number,
        default:50,
        min:0
    },
    isCreditAvaiable:{
        type: Boolean,
        default:true

    },


    notes:{
        type:[mongoose.Schema.Types.ObjectId],// notes model
        ref:"Notes",
        default:[]
    }


} ,{
    timestamps:true
})



const userModel = mongoose.model("UserModel",userSchema)

export default userModel;
const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true
    },
    username:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    purchasedBooks:[
        {
        type:mongoose.Schema.Types.ObjectId,ref:'Book'
    }
],
    cart:[{type:mongoose.Schema.Types.ObjectId,ref:'Book'}]
,role:{
    type:String,
    required:true,
    trim:true
}
})
const User=mongoose.model('User',userSchema);
module.exports=User;
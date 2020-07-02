const mongoose=require("./db.js")


let UserSchema=new mongoose.Schema({
    userName:{type:String,unique:true},
    password:String,
    name:String,
    age:Number,
    sex:String,
    tel:Number,
    status:{
        type:Boolean,
        default:false,
    }
})


let Users=mongoose.model("users",UserSchema);


module.exports=Users;
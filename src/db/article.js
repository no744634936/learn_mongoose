const mongoose=require("./db.js")


let articleSchema=new mongoose.Schema({

    cid:{
        //分类id
        //添加数据的时候会自动将字符串转换成objectId
        type:mongoose.Schema.Types.ObjectId,
    },
    author_id:{
        //用户id
        ////添加数据的时候会自动将字符串转换成objectId
        type:mongoose.Schema.Types.ObjectId,
    },
    author_name:{
        type:String,
    },
    title:{
        type:String,
        unique:true,
    },
    content:String,
    description:String,
})


let Articles=mongoose.model("articles",articleSchema);


module.exports=Articles;
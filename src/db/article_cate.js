const mongoose=require("./db.js")



let ArticleCateSchema=new mongoose.Schema({
    title:{type:String,unique:true},
    description:String,
    add_time:{
        type:Date,
    }
})


let ArticleCate=mongoose.model("articleCategories",ArticleCateSchema);


module.exports=ArticleCate;
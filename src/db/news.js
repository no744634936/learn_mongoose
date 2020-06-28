const mongoose=require("./db.js")

//3,定义一个schema,
// 跟users表中的数据类型一致
// 定义是为插入表里的数据进行格式验证
// 还有就是更新修改记录的时候只能修改，schema中定义好的属性，

let newsSchema=new mongoose.Schema({
    title:String,
    content:String,
    author:String,
})

//4,定义数据库模型，将数据库中的news表 与 newsSchema 对应起来
let News=mongoose.model("news",newsSchema);


module.exports=News;
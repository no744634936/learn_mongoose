const mongoose=require("./db.js")


let OrderSchema=new mongoose.Schema({
    order_id:String,
    uid:Number,
    trade_no:String,
    all_price:Number,
    all_num:Number,
})

//4,定义数据库模型，将数据库中的news表 与 newsSchema 对应起来
let Orders=mongoose.model("orders",OrderSchema);


module.exports=Orders;
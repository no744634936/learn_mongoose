const OrderItem=require("../db/order_item.js");
const mongoose = require('mongoose');


//查询order_items 表，找出商品名称是酸奶 所对应的orders表里的订单号，
//以及订单总价格


OrderItem.aggregate(
    [
        {
            $lookup:
            {
                from:"orders",
                localField:"order_id",
                foreignField:"order_id",
                as:"order_info"
            }
        },
        {
            // $match:{"title":"酸奶"}   这个写法可以
            // $match:{_id:"5ef85acf1477fc283c4b1878"} 关于_id 这种写法不对
            
            // 使用 mongoose.Types.ObjectId 将字符串转化为object。 注意要导入mongoose
            $match:{_id:mongoose.Types.ObjectId("5ef85acf1477fc283c4b1878")}
        }
    ],
    (err,docs)=>{
        if(err) return console.error(err);
        console.log(JSON.stringify(docs));
    }
    
)
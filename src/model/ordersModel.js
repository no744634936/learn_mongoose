const Orders=require("../db/order.js")

//查询orders表 将每个order下面的商品项目也显示出来
Orders.aggregate(
    [
        {
            $lookup:
            {
                from:"order_items",
                localField:"order_id",
                foreignField:"order_id",
                as:"items"
            }
        },
        {
            $match:{"all_price":{$gte:90}}
        }
        
    ],
    (err,docs)=>{
        if(err) return console.error(err);
        console.log(JSON.stringify(docs));
        //如果不使用JSON.stringify返回的数据中将包含着样的数据
        //items: [ [Object], [Object], [Object] ]
    }
)



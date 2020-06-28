1, 查看  table_relation.pdf  文件


2,mongodb 中聚合管道的使用，复杂查询
  查看aggrate.pdf 文件


-------------------------------------------------------
在mongoose 中使用 aggrate

1，建立orders表
插入数据
[
    {"order_id":"1","uid":10,"trade_no":"111","all_price":100,"all_num":2},
    {"order_id":"2","uid":7,"trade_no":"222","all_price":90,"all_num":2},
    {"order_id":"3","uid":9,"trade_no":"333","all_price":20,"all_num":6}
]


2，建立order_items 表
插入数据
[
    {"order_id":"1","title":"商品鼠标 1","price":50,"num":1},
    {"order_id":"1","title":"商品键盘 2","price":50,"num":1},
    {"order_id":"1","title":"商品键盘 3","price":0,"num":1},
    {"order_id":"2","title":"牛奶","price":50,"num":1},
    {"order_id":"2","title":"酸奶","price":40,"num":1},
    {"order_id":"3","title":"矿泉水","price":2,"num":5},
    {"order_id":"3","title":"毛巾","price":10,"num":1}
]


3,查询orders里每一个订单对应的商品


db.order_items.aggregate( [ { $group: {_id: "$order_id", total: {$sum: 1}} } ] )
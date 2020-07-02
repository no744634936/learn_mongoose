1,建立users表
[
    {"usernaem":"zhang","password":"123","name":"张三","age":23,"sex":"男","tel":"12345678"},
    {"usernaem":"wang","password":"123","name":"王二","age":26,"sex":"男","tel":"00000000"},
    {"usernaem":"li","password":"123","name":"李四","age":22,"sex":"女","tel":"12000000"},
    {"usernaem":"huang","password":"123","name":"黄华","age":22,"sex":"女","tel":"09086543234"},
    {"usernaem":"wu","password":"123","name":"吴夏","age":22,"sex":"女","tel":"08076534231"}
]

2，建立 articleCategories表
[
    {"title":"国际新闻","description":"专门报道国际间的新闻"},
    {"title":"国内新闻","description":"专门报道国内的新闻"}

]



3，建立articles 表
   
    cid 与 author_id 后面的问号换成 users表跟articleCategories表里的具体的id

[
    {"title":"习近平访问美国","content":"省略。。。","cid":?,"author_id":?,"author_name":"zhang","description":"省略。。。"},
    {"title":"北京进入雷雨多发时期 ","content":"省略。。。","cid":?,"author_id":?,"author_name":"wang","description":"省略。。。"},
    {"title":"特朗普表态 ","content":"省略。。。","cid":?,"author_id":?,"author_name":"li","description":"省略。。。"},
]



具体的数据是这个样子的。 注意cid 与 author_id  都是objectId


[
    {"title":"习近平访问美国","content":"省略。。。","cid":{"$oid":"5ef94e8a24700b48d4c13768"},"author_id":{"$oid":"5ef950a724700b48d4c1376a"},"author_name":"zhang","description":"省略。。。"},

    {"title":"北京进入雷雨多发时期 ","content":"省略。。。","cid":{"$oid":"5ef94e8a24700b48d4c13769"},"author_id":{"$oid":"5ef950a724700b48d4c1376b"},"author_name":"wang","description":"省略。。。"},

    {"title":"特朗普表态 ","content":"省略。。。","cid":{"$oid":"5ef94e8a24700b48d4c13768"},"author_id":{"$oid":"5ef950a724700b48d4c1376c"},"author_name":"li","description":"省略。。。"}
]

--------------------------------------------------------------------------
使用聚合管道实现多个表之间的查询。


表与表之间的关系，查看 n_tables_relation.jpg 图片

查询逻辑查看， model/article_info_model.js 文件


也可以使用populate来实现多表查询，但是，建议使用聚合管道就已经足够。


----------------------------------------------


mongodb 中给表建立索引　使用explain 

命令行里写代码添加一些测试数据

for(let i=0;i<1000,i++){db.shop.insert({"title":"shop"+i})}

查看 mongodb_index_explain.pdf 文件。
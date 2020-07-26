// 写代码之前要建立一个　mongoose_test 数据库
// 建立一个users 数据表
// 插入一条数据
// {"_id":{"$oid":"5ef8021ab3c16cd4f35338b0"},"name":"zhang","age":23,"status":・・


//1,导包
const mongoose = require('mongoose');

//2，建立连接
mongoose.connect('mongodb://localhost:27017/mongoose_test', {useNewUrlParser: true,useUnifiedTopology: true});
// mongoose.connect("mongodb://localhost:27017/mongoose_test")

//3，连接是否成功
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("database connected!");
});


//3,定义一个schema,
// 跟users表中的数据类型一致
// 定义是为插入表里的数据进行格式验证
// 还有就是更新修改记录的时候只能修改，schema中定义好的属性，

let userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    status:{
        type:Number,
        default:0, //默认参数
    }
})

//4,定义数据库模型，将数据库中的users表 与 userSchema 对应起来
let Users=mongoose.model("users",userSchema);


//5,查询数据
Users.find({},(err,doc)=>{
    if(err) return console.error(err);
    console.log(doc);
    
})

//6,增加数据
let newRecord=new Users({
    name:"baidu",
    age:20,
    status:0,
})

newRecord.save((err,doc)=>{
    if(err) return console.error(err);
    console.log(doc);  //可以返回新添加的数据
});

//这样也可以取出新添加的数据
// newRecord.save(); 返回的是一个promise
//可以在async 方法中使用 await newRecord.save(); 将数据取出
//也可以 使用then 来取出数据 就像下面这样
// let result=newRecord.save();  
// result.then(data=>console.log(data))


//7,数据更新
Users.updateOne(
    {_id:"5ef8021ab3c16cd4f35338b1"},// 条件
    {name:"zhanghaifeng"},           //要修改成为的数据
    (err,doc)=>{
        if(err) return console.error(err);
        console.log("---------------------------");
        console.log(doc);   //这是返回的数据{ n: 1, nModified: 1, ok: 1 }
    }
)


//8，删除数据
Users.deleteOne(
    {_id:"5ef8021ab3c16cd4f35338b0"},
    (err,doc)=>{
        if(err) return console.error(err);
        console.log("================================");
        console.log(doc);  //这是返回的数据{ n: 1, ok: 1, deletedCount: 1 }
    }
)




// ctr 加alt 加 n 来运行这个文件
// ctr 加alt 加 m 来停止这个文件
//按住ctrl 然后点击deleteOne 之类的方法，vscode会自动跳转到那个方法定义的位置

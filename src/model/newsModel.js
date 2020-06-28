const News=require("../db/news.js")


//5,查询数据
News.find({},(err,doc)=>{
    if(err) return console.error(err);
    console.log(doc);
    
})



//这里只是演示，真正写代码的时候将model里面的方法输出到controller里面去。
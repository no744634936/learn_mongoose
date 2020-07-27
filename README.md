npm install mongoose --save

查看 src/db/demo1.js 文件就知道怎么做了



使用mongoose 时数据表的命名方式，
不要用单数article，用复数，articles
单词里面不要有大写 todoLists 使用小写todolists。



mongoose　里面各个方法的返回值

find 
findOne
这两个如果没有记录就会返回null，有记录就会返回object

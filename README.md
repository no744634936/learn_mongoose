npm install mongoose --save

查看 src/db/demo1.js 文件就知道怎么做了



使用mongoose 时数据表的命名方式，
不要用单数article，用复数，articles
单词里面不要有大写 todoLists 使用小写todolists。


---------------------------------------------------------
mongoose　里面各个方法的返回值

find ，findOne 用这两个方法查找，如果没有记录就会返回null，有记录就会返回记录的object


updateOne 不会返回更新后的记录。而是返回 { n: 1, nModified: 1, ok: 1 }

findByIdAndUpdate 可以返回更新后的记录，注意，一定要带{new:true} 这个参数。否则返回的就是更新前的参数
    chargeCredits=async(userId,credits)=>{
    
        let response=await Users.findByIdAndUpdate(
        
            {_id:userId},
            
            {credits:credits},
            
            {new:true}
            
        )
        
        return response;
        
    }



-----------------------------------------------------------
{ new : true } will return the modified document rather than the original.
updateOne doesn't have this option. If you need response as updated document use findOneAndUpdate.
Below are the mongoosejs function where you can use { new : true }

findByIdAndUpdate()

findOneAndUpdate()

findOneAndDelete()

findOneAndRemove()

findOneAndReplace()

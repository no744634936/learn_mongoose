const Articles=require("../db/article.js")
const ArticleCate=require("../db/article_cate.js")
const Users=require("../db/user.js")


////查询文章的信息
// Articles.find({},(err,docs)=>{
//     console.log(docs);
// })


//三表查询。
//查询文章的信息，文章信息里面带有分类信息，还要带有作者的信息

Articles.aggregate(
    [
        {
            $lookup:{
                from:"articleCategories",
                localField:"cid",
                foreignField:"_id",
                as:"cate",
            }
        },
        {
            $lookup:{
                from:"users",
                localField:"author_id",
                foreignField:"_id",
                as:"user_info",
            }
        }
    ],
    (err,docs)=>{
        console.log(JSON.stringify(docs));
    }
)
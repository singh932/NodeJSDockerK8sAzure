// node index.js
// npm run dev - after adding nodemon
const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.json(
        [
            {
                id:1,
                name:"docke"
            },{
                id:2,
                name:"jot"
            },{
                id:3,
                name:"Singh"
            },
        ]
    )
});
app.listen(5050,()=>{
    console.log("app is running on 5050 port")
})
const express=require("express");
const bodyParser=require("body-parser");
const https=require("https");

const app=express();
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    
    const url="https://dog.ceo/api/breeds/image/random";
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const imgData=JSON.parse(data);
            const imgUrl=imgData.message;

            console.log(imgUrl);
            // console.log(imgData);
            res.render('home',{imgUrl:imgUrl});
        })
    });
    
});


app.listen(3000,()=>{
    console.log("Server started on port 3000");
});
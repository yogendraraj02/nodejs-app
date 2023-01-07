const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/' , (req,res)=>{
    res.status(200).json({message : "Happy to host my nodejs app" , 'hosted' : true});
})
app.get('/message' , (req,res)=>{
    res.send("Hello World!");
})
app.listen(port , ()=>console.log(`server is up at ${port}`));
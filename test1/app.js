const express = require('express');
const port = process.env.port || 3000 ;

const app = express();
app.use((req,res,next)=>{
   
    next(error)
})
app.use((error,req,res,next)=>{
    res.status(404).json({
        error_message:error.message,
    })
    next();
})

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"hello there",
    })

})
app.get('/home',(req,res)=>{
    res.status(404).json({
        message:" you are in the  home"
    })
})


app.listen(3000,()=>{
    console.log(`the server running a http://localhost:3000`);
})
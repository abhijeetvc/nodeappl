const express=require('express')

const app=express()

const port=8787

app.get('/check',(req,res)=>{
    res.send('hello ExpressJS')
})

app.listen(port,()=>{
    console.log("Server Started!!!");
})
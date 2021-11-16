const express=require('express')

//const bodyParser=require('body-parser')

const cors=require('cors')

const app=express()

const port=8787

var corsOptions={
    origin:"http://localhost:3000"
}

app.use(cors(corsOptions))

app.use(express.json())

//app.use(bodyParser.json())

app.get('/check',(req,res)=>{
    res.send('hello ExpressJS')
})

app.post("/saveData",(req,res)=>{
    const user=req.body 
    console.log(user);
    
})

app.listen(port,()=>{
    console.log("Server Started!!!");
})
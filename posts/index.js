const express= require('express');

const app=express();
const {randomBytes}=require('crypto');
const cors=require('cors');


const posts={};

app.use(express.json());
app.use(cors());

app.get('/posts',(req,res)=>{

    res.send(posts);
})

app.post('/posts',(req,res)=>{

    const id=randomBytes(4).toString('hex');
    console.log(req.body);
    const {title}=req.body;
    
    posts[id]={
        id,
        title
    }

    res.status(201).json(posts[id]);
})

app.listen(8000,()=>{
    console.log('the app is running on port 8000');
})
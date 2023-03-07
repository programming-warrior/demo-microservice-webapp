const express=require('express');
const app=express();
const {randomBytes}=require('crypto');
const cors=require('cors');
const axios=require('axios');

const comments={
    //'postId':['commentId':'title'],
}

app.use(express.json());
app.use(cors());

app.get('/posts/:id/comments',(req,res)=>{
    const response=comments[req.params.id] || [];
    res.send(response);
})

app.post('/posts/:id/comments',async(req,res)=>{
    const postId=req.params.id;
    const commentId=randomBytes(4).toString('hex');
    const title=req.body.title;
    
    const newComment=comments[postId] || [];

    newComment.push({
        commentId,
        title,
    })
    comments[postId]=newComment;
    
    await axios.post('http://localhost:8005/events',{
        type:'CommentCreated',
        data:{
            id:commentId,
            content:title,
            postId:req.params.id
        }
    })

    res.status(201).send(comments[postId]);
})  

app.post('/events',(req,res)=>{
    console.log('event recieved '+req.body.type);
    res.send({});
})


app.listen('8001',()=>{
    console.log('app is running on port 8001');
})
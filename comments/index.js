const express=require('express');
const app=express();
const {randomBytes}=require('crypto');

const comments={
    //'postId':['commentId':'title'],
}

app.use(express.json());

app.get('/posts/:id/comments',(req,res)=>{
    res.send(comments[req.params.id]);
})

app.post('/posts/:id/comments',(req,res)=>{
    const postId=req.params.id;
    const commentId=randomBytes(4).toString('hex');
    const title=req.body.title;
    
    const newComment=comments[postId] || [];

    newComment.push({
        commentId,
        title,
    })

    comments[postId]=newComment;

    res.status(201).send(comments[postId]);
})  


app.listen('8001',()=>{
    console.log('app is running on port 8001');
})
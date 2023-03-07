const express=require('express');
const app=express();
const {randomBytes}=require('crypto');
const cors=require('cors');

const comments={
    //'postId':['commentId':'title'],
}

app.use(express.json());
app.use(cors());

app.get('/posts/:id/comments',(req,res)=>{
    const response=comments[req.params.id] || [];
    res.send(response);
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
    console.log(comments);

    res.status(201).send(comments[postId]);
})  


app.listen('8001',()=>{
    console.log('app is running on port 8001');
})
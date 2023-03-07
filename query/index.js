const express=require('express');
const app=express();
const cors=require('cors');

app.use(cors());
app.use(express.json());

const posts={
    
}

app.get('/posts',(req,res)=>{
    res.send(posts);
})

app.post('/events',(req,res)=>{
    const eventType=req.body.type;
    if(eventType=='PostCreated'){
        posts[req.body.data.id]={};
        posts[req.body.data.id].id=req.body.data.id;
        posts[req.body.data.id].title=req.body.data.title;
        posts[req.body.data.id].comments=[];
    }
    if(eventType=='CommentCreated'){
        const comments=posts[req.body.data.postId].comments || [];
        comments.push({
            id:req.body.data.id,
            content:req.body.data.content
        });
        posts[req.body.data.postId].comments=comments;
    }
    res.send({});
})

app.listen(8002,()=>{
    console.log('app is listening on port 8002');
})
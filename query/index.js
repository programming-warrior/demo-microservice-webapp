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
            content:req.body.data.content,
            status:req.body.data.status,
        });
        posts[req.body.data.postId].comments=comments;
    }

    if(eventType=='CommentUpdated'){
        const {postId,id,content,status}=req.body.data;
        const comment=posts[postId].comments.find((comment)=>{
            return comment.id==id;
        })
        comment.status=status;
        comment.content=content;
        comment.id=id;
        console.log(posts[postId].comments[id]);
        posts[postId].comments[id]=comment;
    }

    res.send({});
})

app.listen(8002,()=>{
    console.log('app is listening on port 8002');
})
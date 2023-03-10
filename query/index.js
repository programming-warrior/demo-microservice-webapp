const express=require('express');
const app=express();
const cors=require('cors');
const axios=require('axios');

app.use(cors());
app.use(express.json());

const posts={
    
}

const handleEvent=(type,data)=>{
    const eventType=type;
    if(eventType=='PostCreated'){
        posts[data.id]={};
        posts[data.id].id=data.id;
        posts[data.id].title=data.title;
        posts[data.id].comments=[];
    }
    if(eventType=='CommentCreated'){
        const comments=posts[data.postId].comments || [];
        comments.push({
            id:data.id,
            content:data.content,
            status:data.status,
        });
        posts[data.postId].comments=comments;
    }

    if(eventType=='CommentUpdated'){
        const {postId,id,content,status}=data;
        const comment=posts[postId].comments.find((comment)=>{
            return comment.id==id;
        })
        comment.status=status;
        comment.content=content;
        comment.id=id;
        console.log(posts[postId].comments[id]);
        posts[postId].comments[id]=comment;
    }
}

app.get('/posts',(req,res)=>{
    res.send(posts);
})

app.post('/events',(req,res)=>{
    const {type,data}=req.body;
    handleEvent(type,data);
    res.send({});
})

app.listen(8002,async()=>{
    console.log('app is listening on port 8002');
    try{
        const res=await axios.get('http://localhost:8005/events');
        res.data.forEach(event=>{
            handleEvent(event.type,event.data);
        })
    }
    catch(e){
        console.log(e);
    }
   
})
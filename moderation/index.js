const express=require('express');
const app=express();
const axios=require('axios');

app.use(express.json());

app.post('/events',async(req,res)=>{

    const {type,data}=req.body;
    if(type=='CommentCreated'){
        console.log('comment-created event');
        //comment should not contain the word orange
        const status=data.content.indexOf('orange')>-1 ? 'rejected' : 'approved';

        axios.post('http://localhost:8005/events',{
            type:'CommentModerated',
            data:{
                status,
                content:data.content,
                postId:data.postId,
                id:data.id,
            }
        }).catch((e)=>{
            console.log(e);
        })
    }
    res.send({});
})


app.listen(8003,()=>{
    console.log('latest version');
    console.log('listening on port 8003');
})
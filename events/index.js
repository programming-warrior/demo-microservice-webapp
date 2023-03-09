const express=require('express');
const app=express();
const axios=require('axios');

app.use(express.json());


app.post('/events',(req,res)=>{
    const event=req.body;
    //post
    axios.post('http://localhost:8000/events',event)
    //comment
    axios.post('http://localhost:8001/events',event);
    //query
    axios.post('http://localhost:8002/events',event);
    //moderation
    axios.post('http://localhost:8003/events',event);

    res.send({"status":"ok"});
})


app.listen(8005,()=>{
    console.log('event is listening on port 8005');
});
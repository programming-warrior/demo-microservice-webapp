const express=require('express');
const app=express();
const axios=require('axios');

app.use(express.json());

const events=[];

app.post('/events',async(req,res)=>{
    const event=req.body;
    events.push(event);
    try{
        //post
        const p1=axios.post('http://localhost:8000/events',event)
        //comment
        const p2=axios.post('http://localhost:8001/events',event);
        //query
        const p3=axios.post('http://localhost:8002/events',event);
        //moderation
        const p4=axios.post('http://localhost:8003/events',event);

        await Promise.all([p1,p2,p3,p4]);

        res.send({"status":"ok"});
    }
    catch(e){
        console.log(e);
    }

})

app.get('/events',(req,res)=>{
    res.send(events);
})


app.listen(8005,()=>{
    console.log('event is listening on port 8005');
});
import React,{useState} from 'react';
import axios from 'axios';

const CommentCreate=({postId})=>{
    const [comment,setcomment]=useState('');

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post(`http://localhost:8001/posts/${postId}/comments`,{
            title:comment,
        })

        setcomment('');
    }

    return (
            <div className='container'>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>comment</label>
                        <input className="form-control" value={comment} onChange={e=>{setcomment(e.target.value)}}/>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
         
    )
}

export default CommentCreate;
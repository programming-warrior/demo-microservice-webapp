import React,{useState} from 'react';

import axios from 'axios';

const PostCreate=()=>{
    const [title,setTitle]=useState('');

    const onSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/posts',{
            title,
        }).then(()=>{

        }).catch(()=>{

        })
        setTitle('');
    }

    return (
       
            <div className='container'>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input className="form-control" value={title} onChange={e=>{setTitle(e.target.value)}}/>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
         
    )
}

export default PostCreate;
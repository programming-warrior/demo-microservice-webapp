import React from 'react';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostCard=(props)=>{
    return(
        <div className="card-body" style={{background:"black",color:"white",padding:"10px",borderRadius:"3px",margin:"20px"}}>
            <h3>{props.title}</h3>
            <CommentList postId={props.id}/>
            <CommentCreate postId={props.id}/>
        </div>
    )
}

export default PostCard;
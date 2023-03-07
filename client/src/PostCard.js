import React from 'react';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostCard=({title,id,comments})=>{
    return(
        <div className="card-body" style={{background:"black",color:"white",padding:"10px",borderRadius:"3px",margin:"20px"}}>
            <h3>{title}</h3>
            <CommentList comments={comments} />
            <CommentCreate postId={id}/>
        </div>
    )
}

export default PostCard;
import axios from 'axios';
import  React,{useState,useEffect} from 'react';
import PostCard from './PostCard';


const PostList=()=>{
    const [posts,setPosts]=useState({});

    //fetching all the posts
    const getPosts=async()=>{
        const res=await axios.get('http://localhost:8002/posts');
 
        setPosts(res.data);
    }

    useEffect(()=>{
        getPosts();
    },[]);

   const renderedPosts=Object.values(posts).map((post)=>{
        return <PostCard title={post['title'] } id={post['id']} comments={post['comments']} key={post.id}  />
   })
 
    return(
        
        <div className='d-flex flex-row flex-wrap justifyContent'>
            {renderedPosts}
        </div>
    )
}

export default PostList;
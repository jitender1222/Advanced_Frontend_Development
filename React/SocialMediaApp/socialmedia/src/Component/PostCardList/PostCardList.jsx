import { useEffect, useState } from 'react';
import axios from "axios";
import PostCard from '../PostCard';

const PostCardList=()=>{

    const [post,setPost]=useState([]);
    useEffect(()=> {
        console.log(import.meta.env.VITE_APP_ID)
        axios.get("https://dummyapi.io/data/v1/post",{
          headers:{'app-id':import.meta.env.VITE_APP_ID}
        }).then(response=>{
          const postData=response.data;
          setPost([...postData.data]);
        })
      },[]);

      return (
        post.map((post)=> <PostCard text={post.text} image={post.image} key={post.id} authorFirstName={post.owner.firstName} />)
      )

}

export default PostCardList;
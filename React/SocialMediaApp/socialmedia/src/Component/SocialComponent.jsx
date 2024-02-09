import InputTextField from "./Input/Input";
import MainContainer from "./MainContainer/MainContainer";
import PostContext from "../Provider/PostsProvider";
import { useEffect, useState } from "react";
import axios from "axios";


const SocialApp=()=>{

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
        <>
        <PostContext.Provider value={{post,setPost}}>
            <InputTextField />
            <MainContainer />
        </PostContext.Provider>
        </>
    )
}

export default SocialApp;
import Button from '@mui/material/Button';
import {Box} from "@mui/material";
import TextField from '@mui/material/TextField';  
import axios from 'axios';
import {useContext, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import PostContext from '../../Provider/PostsProvider';


export default function InputTextField() {

    const [postText,setPostText]=useState("");
    const [imageUrl,setImageUrl]=useState("");
    const [loading,setLoading]=useState(false);
    const {post,setPost}=useContext(PostContext);

    async function createPost(){

        setLoading(true);
            axios.post("https://dummyapi.io/data/v1/post/create",
            {
                owner:"60d0fe4f5311236168a109ca",
                text:postText,
                image:imageUrl,
                likes:0,
                publishDate:new Date()
            },
        {
          headers:{'app-id':import.meta.env.VITE_APP_ID}
        }
        ).then(response=>{
          // const postData=response.data;
          // console.log("post data",response);
          setPost([response.data,...post])
          setLoading("false");
          setPostText("");
          setImageUrl("");
        })
       
    }
  return (
    <Box sx={{mt:"1rem"}}>
      <TextField 
      fullWidth 
      id="outlined-basic" 
      label="Your Post here..." 
      variant="outlined" 
      value={postText}
      onChange={(e)=> setPostText(e.target.value)}
      />
      <TextField 
      fullWidth 
      sx={{mt:"1rem"}} 
      id="filled-basic" 
      label="Image Here" 
      variant="outlined"
      value={imageUrl}
      onChange={(e)=> setImageUrl(e.target.value)} 
      />
      {
        (loading) ? <LoadingButton loading /> : <Button 
        sx={{mt:"2rem"}} 
        variant='contained'
        loading="true"
        onClick={createPost}>Submit</Button>
      }
    </Box>
  );
}


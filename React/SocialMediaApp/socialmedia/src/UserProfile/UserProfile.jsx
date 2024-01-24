
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MediaControlCard() {
    const [user,setUser]=useState("");
    const [loading,setLoading]=useState(false);
  const theme = useTheme();
  let {id}=useParams(); 
  console.log("id",id);
  useEffect(()=>{
    setLoading(true);
    axios.get(`https://dummyapi.io/data/v1/user/${id}`,{
        headers:{
            'app-id':import.meta.env.VITE_APP_ID
        }
    }).then((response) =>{
        setLoading(false);
       setUser(...response.data);
    });
  },[])

  return (
    <>
     {
        loading ? <div>Loading ....</div> : <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {user.title}{user.firstName + user.lastName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {user.email}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={user.picture}
          alt={user.firstName}
        />
      </Card>
     }
    </>
  );
}

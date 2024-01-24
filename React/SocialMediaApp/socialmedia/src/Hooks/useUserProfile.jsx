import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

export default function useUserProfile(){
        const [user,setUser]=useState("");
        const [loading,setLoading]=useState(false);
        let {id}=useParams(); 
        useEffect(()=>{
        setLoading(true);
        axios.get(`https://dummyapi.io/data/v1/user/${id}`,{
            headers:{
                'app-id':import.meta.env.VITE_APP_ID
            }
        }).then((response) =>{
            setLoading(false);
        setUser(response.data);
        });
    },[])

    return [loading,user];
}
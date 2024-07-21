import { useEffect, useState } from "react";



const useGeolocation=()=>{

    const [latitude,setLatitude]=useState();
    const [longitude,setLongitude]=useState();

    function showPosition(position){
         setLatitude(position.coords.latitude);
         setLongitude(position.coords.longitude)
    }
  

    useEffect(()=>{
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(showPosition);
        }
      },[])

      return [latitude,longitude]
}

export default useGeolocation;
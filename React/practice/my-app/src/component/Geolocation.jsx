import useGeolocation from "./Location";

const Geo=()=>{
    const [latitude,longitude]=useGeolocation();
    return (
        <div>
        <h2>Geolocation</h2>
        <span>Latitude : {latitude} </span>
        <br/ >
        <span>Longitude : {longitude}</span>
      </div>
    )
   
}

export default Geo;
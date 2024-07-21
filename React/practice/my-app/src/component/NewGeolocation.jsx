import useGeolocation from "./Location"

export default function NewGeolocation(){

    const[latitude,longitude]=useGeolocation();

    return (
        <>
        <h1>Geolocation is:</h1>
        <span>Latitude : {latitude} </span>
        <br/ >
        <span>Longitude : {longitude}</span>
        </>
    )
}
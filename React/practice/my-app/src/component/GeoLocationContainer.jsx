import useGeolocation from "./Location"

export default function GeolocationContainer(BaseContainer){ //HOC

    const [latitude,longitude]=useGeolocation();

    return function EnhancedGeoLocation(){
        return (
            <BaseContainer latitude={latitude} longitude={longitude} />
        )
    }
}


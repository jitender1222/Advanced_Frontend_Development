import { useEffect, useState } from 'react'
import './App.css'
import Geo from './component/Geolocation';
import GeolocationContainer from './component/GeoLocationContainer';
import NewGeolocation from './component/NewGeolocation';

function App() {

  const GeolocationUI=GeolocationContainer(Geo);
  
  return (
    <>
    <GeolocationUI />
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import Geo from './component/Geolocation';
import useGeolocation from './component/Location';

function App() {
  console.log("rendered")
  
  return (
    <>
    <Geo />
    </>
  )
}

export default App

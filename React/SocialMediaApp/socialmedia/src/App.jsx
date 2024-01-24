import './App.css'
import {BrowserRouter} from "react-router-dom";
import CustomRoutes from './Routes/Routes';
import Navabar from './Component/Navbar/Navbar';

function App() {

  return (

     <>
     <BrowserRouter>
     <Navabar />
     <CustomRoutes />
     </BrowserRouter>
     </>
  )
}

export default App

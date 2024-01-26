import { useState } from 'react'
import Form from '../Component/Form/Form'
import { FormContext } from '../provider/FormContext'
import './App.css'

function App() {

  const [formInput,setFormInput]=useState({});
  return (
    <>
    <FormContext.Provider value={{formInput,setFormInput}} >
      <Form />
      </FormContext.Provider>
    </>
  )
}

export default App

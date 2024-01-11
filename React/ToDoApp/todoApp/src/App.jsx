import { useReducer, useState } from 'react'
import './App.css'
import TodoList from './Component/TodoList/TodoList'
import AddTodo from './Component/AddToDo/AddTodo'
import TodoContext from './context/TodoContext'
import TodoReducer from './Reducer/TodoReducer'

function App() {

  // const [todos,setTodos]=useState([
  //   {id:1,text:"this is my new todo" , isFinished: true},
  //   {id:2,text:"this is my new todo-1", isFinished: false}
  // ])

  const [todos,dispatch]=useReducer(TodoReducer,[]);

  return (
    <>
      <TodoContext.Provider value={{todos,dispatch}} >
      <AddTodo/>
      <TodoList />
      </TodoContext.Provider>
    </>
  )
}

export default App

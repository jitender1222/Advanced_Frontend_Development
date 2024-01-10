import { useState } from 'react'
import './App.css'
import TodoList from './Component/TodoList/TodoList'
import AddTodo from './Component/AddToDo/AddTodo'
import TodoContext from './context/TodoContext'

function App() {

  const [todos,setTodos]=useState([
    {id:1,text:"this is my new todo" , isFinished: true},
    {id:2,text:"this is my new todo-1", isFinished: false}
  ])

  return (
    <>
      <TodoContext.Provider value={{setTodos,todos}} >
      <AddTodo/>
      <TodoList />
      </TodoContext.Provider>
    </>
  )
}

export default App

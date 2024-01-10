import { useState } from 'react'
import './App.css'
import TodoList from './Component/TodoList/TodoList'
import AddTodo from './Component/AddToDo/AddTodo'

function App() {

  const [todos,setTodos]=useState([
    {id:1,text:"this is my new todo" , isFinished: true},
    {id:2,text:"this is my new todo-1", isFinished: false}
  ])

  function addTodos(todoData){
    let nextId=todos.length+1;
    setTodos([...todos,{id:nextId,text:todoData,isFinished:false}])
  }

  return (
    <>
      <AddTodo setTodos={addTodos}/>
      <TodoList delTodos={setTodos} todos={todos} />
    </>
  )
}

export default App

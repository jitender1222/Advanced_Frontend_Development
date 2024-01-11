import { useContext } from "react";
import Todo from "../Todo/Todo"
import TodoContext from "../../context/TodoContext";

function TodoList(){

    const {todos,dispatch}=useContext(TodoContext);

    function deleteTodo(id){
        dispatch({type:"delete_todo",payload:{id}})
    }

    function editTodo(id,text){
        dispatch({type:"edit_todo",payload:{id,text}})
    }

    function finished(id,state){
        dispatch({type:"finish_todo",payload:{id,state}})
    }
    return (
        <>
        {todos && todos.map((todo) => <Todo 
        key={todo.id} 
        text={todo.text} 
        isFinished={todo.isFinished}
        deleteTodo={() => deleteTodo(todo.id)}
        editTodo={(newTodo)=> editTodo(todo.id,newTodo)}
        finished={(state)=> finished(todo.id,state)}
        /> )}
        </>
    )
}

export default TodoList
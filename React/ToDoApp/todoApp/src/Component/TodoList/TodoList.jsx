import { useContext } from "react";
import Todo from "../Todo/Todo"
import TodoContext from "../../context/TodoContext";

function TodoList(){

    const {todos,setTodos}=useContext(TodoContext);

    function deleteTodo(id){
        const newTodo= todos.filter(todo => todo.id != id);
        setTodos(newTodo)
    }

    function editTodo(id,text){
        const newTodoList=todos.map((todo)=>{
            if(todo.id === id){
                todo.text=text;
            }
            return todo;
        });
        setTodos(newTodoList);
    }

    function finished(id,state){
        const newTodoList=todos.map((todo)=>{
            if(todo.id===id){
                todo.isFinished=state;
            }
            return todo;
        });
        setTodos(newTodoList);
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
import Todo from "../Todo/Todo"

function TodoList({todos,delTodos}){

    function deleteTodo(id){
        const newTodo= todos.filter(todo => todo.id != id);
        delTodos(newTodo)
    }

    function editTodo(id,text){
        const newTodoList=todos.map((todo)=>{
            if(todo.id === id){
                todo.text=text;
            }
            return todo;
        });
        delTodos(newTodoList);
    }

    function finished(id,state){
        const newTodoList=todos.map((todo)=>{
            if(todo.id===id){
                todo.isFinished=state;
            }
            return todo;
        });
        delTodos(newTodoList);
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
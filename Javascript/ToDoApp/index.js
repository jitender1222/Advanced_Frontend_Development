

let todoDataList=document.getElementById("todo-data-list");
let saveBtn=document.getElementById("save-todo");
let todoInputBar=document.getElementById("todo-input-bar");
let todo=[];

todoInputBar.addEventListener("keyup",function toggleSaveButton(){

    let todoText=todoInputBar.value;
    if(todoText.length==0){

        if(saveBtn.classList.contains("disabled")) return ;
        saveBtn.classList.add("disabled");
    }

    else if(saveBtn.classList.contains("disabled")){
        saveBtn.classList.remove("disabled");
    }
})

saveBtn.addEventListener("click",function getTextAndAddTodo(){
    
    let todoText=todoInputBar.value;
    let todos={text:todoText, status:"In Progress",finishBtnText:"Finished"}
    if(todoText.length==0) return;
    todo.push(todos);
    addTodo(todos,todo.length);
    todoInputBar.value=" "
})

function reRender(){
    todo.forEach((element,idx)=>{
        addTodo(element,idx+1);
    })
}

function finishedTodo(event){

    let finishedBtnPressed=event.target;
    let indexToBeFinished=Number(finishedBtnPressed.getAttribute("todo-idx"));

    if(todo[indexToBeFinished].status=="Finished"){
        todo[indexToBeFinished].status="In Progress";
        todo[indexToBeFinished].finishBtnText="Finished"
    }
    else{
        todo[indexToBeFinished].status="Finished";
        todo[indexToBeFinished].finishBtnText="Undo"
    }
    todo.sort((a,b)=>{

        if(a.status=="Finished"){
            return 1;
        }
        return -1;
    })

    todoDataList.innerHTML="";
    reRender();
}

function removeTodo(event){
    
    let dltBtnPressed=event.target;
    let indexToBeRemoved=Number(dltBtnPressed.getAttribute("todo-idx"));
    todo.splice(indexToBeRemoved,1);
    todoDataList.innerHTML="";
    reRender();
}

function addTodo(todoData,todoCount){

    let rowDiv=document.createElement("div");
    let todoItem=document.createElement("div");
    let todoNo=document.createElement("div");
    let todoDeatil=document.createElement("div");
    let todoStatus=document.createElement("div");
    let todoActions=document.createElement("div");
    let dltButton=document.createElement("button");
    let finishedButton=document.createElement("button");
    let hr=document.createElement("hr");

    todoNo.textContent=`${todoCount}`;
    console.log("todoCoubt",todoCount)
    todoDeatil.textContent=todoData.text;
    todoStatus.textContent=todoData.status;
    dltButton.textContent="Delete";
    finishedButton.textContent=todoData.finishBtnText;

    finishedButton.setAttribute("todo-idx",todoCount-1);
    dltButton.setAttribute("todo-idx",todoCount-1);

    dltButton.onclick=removeTodo;
    finishedButton.onclick=finishedTodo;

    todoActions.appendChild(dltButton);
    todoActions.appendChild(finishedButton);

    todoItem.appendChild(todoNo);
    todoItem.appendChild(todoDeatil);
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(todoActions);

    rowDiv.appendChild(todoItem);
    rowDiv.appendChild(hr);

    todoDataList.appendChild(rowDiv);


    // adding classes 

    rowDiv.classList.add("row");
    todoItem.classList.add("d-flex","todo-item", "flex-row", "justify-content-between", "align-items-center");
    todoNo.classList.add("todo-no");
    todoActions.classList.add("todo-actions","d-flex","justify-content-start","gap-2")
    todoDeatil.classList.add("todo-detail","text-muted");
    todoStatus.classList.add("todo-status","text-muted");
    dltButton.classList.add("btn","btn-danger","dlt-todo");
    finishedButton.classList.add("btn","btn-success","finished-todo")

}
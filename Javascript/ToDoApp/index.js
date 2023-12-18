

let todoDataSection=document.getElementById("todo-data");
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

    if(todoText.length==0) return;
    todo.push(todoText);
    addTodo(todoText,todo.length);
    todoInputBar.value=" "
})

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
    todoDeatil.textContent=todoData;
    todoStatus.textContent="In progress";
    dltButton.textContent="Delete";
    finishedButton.textContent="Finished";

    todoActions.appendChild(dltButton);
    todoActions.appendChild(finishedButton);

    todoItem.appendChild(todoNo);
    todoItem.appendChild(todoDeatil);
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(todoActions);

    rowDiv.appendChild(todoItem);
    rowDiv.appendChild(hr);

    todoDataSection.appendChild(rowDiv);


    // adding classes 

    rowDiv.classList.add("row");
    todoItem.classList.add("d-flex","todo-item", "flex-row", "justify-content-between", "align-items-center");
    todoNo.classList.add("todo-no");
    todoActions.classList.add("todo-actions","d-flex","justify-content-start","gap-2")
    todoDeatil.classList.add("todo-detail","text-muted");
    todoStatus.classList.add("todo-status","text-muted");
    dltButton.classList.add("btn","btn-danger");
    finishedButton.classList.add("btn","btn-success")

}
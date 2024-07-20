import { useState } from "react";

const App=()=>{

    let [current,setcurrent]=useState(0);

    const Questions=[
        {
            question:"What is the time complexity of binary search ?",
            options:[
                { answer: "O(nlogn)" , isCorrect: "false" },
                { answer: "O(n*n)" , isCorrect: "false" },
                { answer: "O(n)" , isCorrect: "false" },
                { answer: "O(logn)" , isCorrect: "true" },
            ]
        },
        {
            question:"What is the time complexity of linear search ?",
            options:[
                { answer: "O(n*n)" , isCorrect: "true" },
                { answer: "O(nlogn)" , isCorrect: "false" },
                { answer: "O(logn)" , isCorrect: "false" },
                { answer: "O(n)" , isCorrect: "false" },
            ]
        },
        {
            question:"What is the time complexity of merge sort ?",
            options:[
                { answer: "O(nlogn)" , isCorrect: "true" },
                { answer: "O(n)" , isCorrect: "false" },
                { answer: "O(logn)" , isCorrect: "false" },
                { answer: "O(n*n)" , isCorrect: "false" },
                
            ]
        },
    ]

    function won(ans){
        Questions[current].options.filter((opt)=> {
            console.log(opt.isCorrect,ans)
            if(opt.answer==ans && opt.isCorrect=="true"){
                alert("Hurrah your ans is correct")
            }
        } )
    }

    function next(){
        if((Questions.length-1) != current){
            setcurrent(current+=1)
        }
        else if((Questions.length-1) == current){
            alert("Question finished")
            setcurrent(0);
        }
    }

    return (
        <>
       <div>
        <span>Question{current+1} {Questions[current].question}</span>
        <br/> <br/>
        <span>{Questions[current].options.map((ans) => <button onClick={()=> won(ans.answer)}>{ans.answer}</button>)}</span>
        <br /> <br/>
        <button onClick={() => next() }>Next</button>
        </div>
        </>
    )
}

export default App;
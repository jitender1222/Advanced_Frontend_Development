import { useState,useRef,useEffect } from "react";
import "../Components/count.css";

function CountDown() {
  const [timer, setTimer] = useState(null);
  const [diff,setDiff]=useState(0);
  const id=useRef(0);

  function startTimer(){

    id.current=setInterval(()=>{
        setDiff(new Date(timer) - new Date());
        
    },1000)
  }

  useEffect(()=>{
        if(diff<=0){
            clearInterval(id.current);
        }
  },[diff])

  const getDays=()=>{

    return Math.floor(diff/(1000*60*60*24));
  }

  const getHours=()=>{
    const hoursInMs= diff%(1000*60*60*24);
    return Math.floor(hoursInMs/(1000*60*60));
  }

  const getMin=()=>{
    const hoursInMs= diff%(1000*60*60*24);
    const minInMs=hoursInMs%(1000*60*60);
    return Math.floor(minInMs/(1000*60));
  }

  const getSec=()=>{
    const hoursInMs= diff%(1000*60*60*24);
    const minInMs=hoursInMs%(1000*60*60);
    const secInMs=minInMs%(1000*60);
    return Math.floor(secInMs/(1000));
  }

  return (
    <>
      <div className="outer-div">
        <h1>CountDown App</h1>
        <div className="inner-div">
          <input
            type="datetime-local"
            onChange={(e) => setTimer(e.target.value)}
          />
          <button onClick={startTimer} className="btn">Start</button>
        </div>

        {diff}

        <ul className="list-items">
          <li>
            <span className="sub-list">{getDays()}</span>Days
          </li>
          <li>
            <span className="sub-list">{getHours()}</span>Hours
          </li>
          <li>
            <span className="sub-list">{getMin()}</span>Minutes
          </li>
          <li>
            <span className="sub-list">{getSec()}</span>Seconds
          </li>
        </ul>
      </div>
    </>
  );
}

export default CountDown;

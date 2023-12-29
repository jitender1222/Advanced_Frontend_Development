import Icon from "../Icons/Icon";
import "./Card.css"

function Card({turn,player,index}){

    let icon=<Icon />

    if(player=="X"){
        icon= <Icon name={"cross"} />
    }
    else if(player=="O"){
        icon= <Icon name={"circle"} />
    }

    return (
        <div className="card" onClick={()=>{ turn(index) }} >
           {icon}
        </div>
    )
}

export default Card;
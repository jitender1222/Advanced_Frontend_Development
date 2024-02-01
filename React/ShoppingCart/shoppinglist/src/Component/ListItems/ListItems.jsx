import List from "../List/List";
import "./ListItems.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus,faMinus} from "@fortawesome/free-solid-svg-icons";

const ListItems=({items})=>{

    return (
        <>
        <div className="outer-list">
        {
            items && items.map((item)=>{
                return (
                    <div className="icon-list" key={item.id}>
                     <FontAwesomeIcon className="icon icon-plus" icon={faPlus} />   
                    <List  
                    name={item.name}
                    quantity={item.quantity} 
                    price={item.price}/>
                    <FontAwesomeIcon className="icon icon-minus" icon={faMinus} />   
                    </div>
                )
            }) 
        }
        </div>
        </>
    )
}

export default ListItems;
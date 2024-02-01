import "./List.css"
const List=({name,price,quantity})=>{

    return (
        <>
        <div className="list">
        <div className="list-items">
            <li><span>Name:</span>{name}</li>
            <li> <span>Quantity:</span> {quantity}</li>
        </div>
        </div>
        </>
    )
}

export default List;
import "./List.css"
const List=({name,price,quantity})=>{

    return (
        <>
        <div className="list-items">
            <li><span>Name:</span>{name}</li>
            <li > <span>Price:</span>{price}</li>
            <li> <span>Quantity:</span> {quantity}</li>
        </div>
        </>
    )
}

export default List;
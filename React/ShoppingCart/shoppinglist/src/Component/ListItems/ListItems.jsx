import List from "../List/List";

const ListItems=({items})=>{

    return (
        <>
        {
            items && items.map((item)=>{
                return (
                    <List key={item.id}  
                    name={item.name}
                    quantity={item.quantity} 
                    price={item.price}/>
                )
            }) 
        }
        </>
    )
}

export default ListItems;
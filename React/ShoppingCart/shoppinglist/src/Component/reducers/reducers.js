import {v4 as uuidv4} from "uuid";
const itemReducer=(shoppingItems,action)=>{ // action -> plain js object which has a type property

    if(action.type == "add_item"){
        return [
            ...shoppingItems,
            {
            id: uuidv4(),
            name: action.item,
            quantity: 1
            }
        ];
    }
    else if(action.type=="increaseQuantity") {

        const newShoppingItems=shoppingItems.map((item)=>{
            if(item.id==action.itemId) item.quantity++;
            return item;
        });
        return newShoppingItems;
    }
    else if(action.type=="decreaseQuantity"){

        let newShoppingItems=shoppingItems.map((item)=>{
            if(item.id==action.itemId) item.quantity--;
            return item
        });
        newShoppingItems=newShoppingItems.filter((item) => item.quantity>0);
        return newShoppingItems;

    }

}

export default itemReducer
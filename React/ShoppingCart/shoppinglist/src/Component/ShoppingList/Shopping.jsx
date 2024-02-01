import { useState } from "react";
import Header from "../Header/Header";
import Input from "../Input/Input";
import ListItems from "../ListItems/ListItems";
import {v4 as uuidv4} from "uuid";

const Shopping=()=>{

    const [shoppingItems,setShoppingItems]=useState([]);

    const addItem=(item)=>{
        setShoppingItems([...shoppingItems,{
            id: uuidv4(),
            name: item,
            quantity: 1
        }])
    }

    const increaseQuantity=(itemId)=>{
        const newShoppingItems=shoppingItems.map((item)=>{
            if(item.id==itemId) item.quantity++;
            return item;
        });
        setShoppingItems(newShoppingItems);
    }

    const decreaseQuantity=(itemId)=>{
        let newShoppingItems=shoppingItems.map((item)=>{
            if(item.id==itemId) item.quantity--;
            return item;
        });
        newShoppingItems=newShoppingItems.filter((item) => item.quantity>0);
        setShoppingItems(newShoppingItems);
    }

    return (
        <>
        <Header />
        <Input addItem={addItem} />
        <ListItems items={shoppingItems} increaseQuantity={increaseQuantity}  decreaseQuantity={decreaseQuantity} />
        </>
    )
}

export default Shopping;
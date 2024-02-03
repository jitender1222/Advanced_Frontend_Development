import { useReducer, useState } from "react";
import Header from "../Header/Header";
import Input from "../Input/Input";
import ListItems from "../ListItems/ListItems";

import itemReducer from "../reducers/reducers";

const Shopping=()=>{

    const [shoppingItems,dispatch]=useReducer(itemReducer,[]);

    const addItem=(itemName)=>{
        
        dispatch({
            type: "add_item",
            item:itemName
        })
    }

    const increaseQuantity=(id)=>{
        
        dispatch({
            type:"increaseQuantity",
            itemId:id
        })
    }

    const decreaseQuantity=(id)=>{
        dispatch({
            type:"decreaseQuantity",
            itemId:id
        })
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
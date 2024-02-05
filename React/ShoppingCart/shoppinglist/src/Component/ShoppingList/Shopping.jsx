import { useReducer, useState } from "react";
import Header from "../Header/Header";
import Input from "../Input/Input";
import ListItems from "../ListItems/ListItems";

import itemReducer from "../reducers/reducers";
import { ShoppingDispatchContext, ShoppingListContext } from "../providers/context";

const Shopping=()=>{

    const [shoppingItems,dispatch]=useReducer(itemReducer,[]);
    return (
        <>
        <ShoppingListContext.Provider value={shoppingItems}>
        <ShoppingDispatchContext.Provider value={dispatch}>
        <Header />
        <Input />
        <ListItems />
        </ShoppingDispatchContext.Provider>
        </ShoppingListContext.Provider>
        </>
    )
}

export default Shopping;
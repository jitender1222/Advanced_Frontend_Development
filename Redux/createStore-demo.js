import { createStore,bindActionCreators } from "redux";

const demoReducer = (state, action) => {
  if (action.type == "add_item") {
    return [...state, { name: action.itemName, quantity: action.itemQuantity }];
  }

  return state;
};

const add_item = (
  name,
  quantity // this function are known as action creator
) => ({
  type: "add_item",
  itemName: name,
  itemQuantity: quantity ? quantity : 1,
});

const initialState = [{ name: "Banana" }];

const store = createStore(demoReducer, initialState);
store.subscribe(() => console.log("State Updates"));


// console.log(store.getState()); it basically return the state of our app -> [ { name: 'Banana' }, { name: 'Tomato' } ]

//  to update the state of our app we have to use dispatch

/*
store.dispatch({
  type: "add_item",
  itemName: "Carrot",
});

console.log(store.getState());
*/

/* action creators -> let's say in our code we have to add some properties like quantity color etc. 
so we have to manually go to each and every single dispatch method and add those property 
but if our code base is large then it is not possible so what we can do is */

// store.dispatch(add_item("Apple", 5));
// console.log(store.getState());

// store.dispatch(add_item("Carrot"));
// console.log(store.getState());

/* 
now there is a problem we have to again and again write the store.dispatch 
method and pass the add_item so instead of writing store.dispatch 
again and again we have to do something so that we can call action creator directly
*/


/* to do this we have a function bind action creator so 
it basically bind our action creator to the store.dispatch method
so we do not have to call store.dispatch method again and again  

const action = bindActionCreator( 1 -> it takes js object inside js 
  object it takes the action creator 
  
  2 -> it takes the method on which we have to bind the bind action creator  )
*/

const action = bindActionCreators({add_item},store.dispatch);

console.log(store.getState());

action.add_item("grapes",4);   // code become more readable

console.log(store.getState());

action.add_item("apple",4);

console.log(store.getState());

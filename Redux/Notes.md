
## Redux 


Core Redux

It has multiple functions

1. compose

2. createStore

3. bindActionCreator

4. combineReducer

**Compose** -> It is a simple utility (helper) function .

Let's take a string and we have to perform the following transformation 

1-> remove all the spaces

2-> concatenate the string with itself

3-> make all char uppercase

4-> make it italics


**createStore** 

It expects a reducer as a arguement and a initial state and it returns a object inside that object there are 4 function 

{

    subscribe -> let's say when we update the state we want to do something so to do this we can use subscribe method we have to pass a callback which is called when our state changed. 

    It also gives us unsubscribe 

    dispatched

    getState -> to get the state of our app. 

    replace Reducer

}

It Creates a Redux **store** that holds the complete state tree of your app. There should only be a single store in your app.

**Store** -> It is basically a black box which store the state of our app and some utility method like dispatched etc.


`The only way to change the state inside it is to dispatch an action on it, which triggers the root reducer function to calculate the new state.`


**Reducer** -> It is a function which takes 2 args state and action .

state -> Js obj

action -> some event or some task or action happend .

Reducer returns only one output -> state object which may or may not be updated .




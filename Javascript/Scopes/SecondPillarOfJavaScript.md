
## Scope

### Everything`(vairables and functions)` inside your code will be used in one of the following 2 ways :

1-> Either it will be getting some values assigned to it.

2-> Or Some value will be reterived from it.


### `Compiler` read the whole code at once and tell us these are the errors if it is present.

Examples -> C,C++


### `Interpreter` read the whole code line by line and if it encounters the first error it will stop the execution it will not move forward.

Example -> ShellScript

### `Note` -> Javascript is not a purely Compiled as well as Intrepreted language .It uses the hybrid architecture to do things.

### `3` Types of Scopes 

1-> Global -> Accessible from anywhere inside the code.

2-> Block -> Accessible only inside that block

3-> Function -> Accesible inside the function .

**AutoGlobal**-> If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable. 


### Higher order function -> HOF are those which take one or more function as arguements or returns a function as an arguement and then execute the logic as its result.

For example

```

function gun(){

    // logic
}

function fun( gun ) {  -> it is taking gun as an arguement.

    // logic

    gun();
}

```

### 1. Map -> It is a higher order function available with arrays it takes a function as an arguement and it return an array in which every value is actually populated by calling function f with original array element as arguement.

### Every element of the original array is passed one by one in the arguement function f whatever is the output for each individual element we populate that output in an array.

### Map internally loops over every element of the given original array pass the element in the arguement function f and then store the returned value inside an array.

### when to use Map ?

Ans -> In any situation when we have to do an operation on every element of the array and store the result of each operation map can be a good operation


***Note*** -> If the function that we are passing in map takes 2 arguements then first arguements will be accessing the **actual value** second arguement will be accessing **index** of that value .


example

```
const newArr=[9,8,7,6,5];

function print(element,idx){

    return `Element at idx ${idx} is ${element}`;
}



const result2= newArr.map(print)
console.log(result2);

```


```
Custom Map function

function customMap(arr,func){

    let tempArr=[];

    for(int i=0;i<arr.length;i++){
        arr.push(tempArr[i]);
    }

    return tempArr;
}

const value=customMap(newArr,print);


```


### 2. Sort -> Sort is also a higher order function which takes a function as an arguement .

Sort will take the comparator function and gives the result in an **lexicographical order**.


let b =[1,10,9,100,1000,11,12,13,14,2,3]

b.sort(function(a,b){

    // if a < b -> a - b will be negative -> if cmp function gives us negative then a is placed before b (a<b)

    // if a > b -> a - b will be positive -> if comp function gives us positive then a is placed after b (a>b)


return a-b;

})

console.log(b);


### Filter -> It is also a higher order function 

Filter also loops over an element

There is one special thing about filter i.e the arguement function f which we have to pass inside the filter should always return a boolean value otherwise will be converted into a boolean .

**Filter loops over every element passes that element in the arguement function and then if the output of this function call is true, then it stores the original element in a new array otherwise doesn't add this element to the array.**

function oddorEven(x){ 

    return (x%2==0) // returning the boolean value
}

let arr=[1,2,3,4,5,6]

const result=arr.filter(oddorEven);

result -> 2,4,6,8






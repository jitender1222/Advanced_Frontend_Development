
## Closures

A closure is the combination of a function bundled together along with its lexical environment. **`OR`**  In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are `created` every time a `function` is created, at function `creation `time.


```

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

```

Output -> Monzilla


Programming language can be divided into 2 parts 

1. Imperative -> In this we provide the computer with step-by-step instructions on how to perform a particular task.

2. Declarative -> It involves specifying what result we're expecting from our code. 

For Example -> 

Suppose a friend of yours wants to come to your apartment, but they don't know your apartment address. So they call you and ask for your address.

Imperative programming is like giving detailed instructions to your friend on how to reach your address from their current location. You tell them exactly what to do and where to go.

Declarative programming, on the other hand, is similar to just giving your actual address. Your friend can then figure out how to get there (maybe using advanced tools like Google Maps or taking a taxi and letting the driver do the work).


## Iterators

In JavaScript, an iterator is an object that provides a way to access elements or values in a sequence, one at a time. Here we do not need to manually tell them that i want the data this way it can automatically do their task.

It has a `next()` method that returns a object with 2 properties .

1. value -> it represents the next value in the sequence.

2. done -> it gives true if the last value of the sequence is consumed if not consumed then after consuming it return {done:true}


```

function nextElement(array){

    let idx=0;

    function next(){
        if(idx==array.length) return {value:undefined , done:false};

    const nextElement=array[idx];
    idx++;
    return {value:nextElement,done:false} ;
    }
    return {next}
}


const automaticfetcher=fetchNextElement([99,1,23,43,90,0]) 

console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());


```

## Generators 

These are special type of functions whose execution is not continuous which means let's say we write a 10 lines of code after executing the 3rd line we break the execution and in future we can again start the execution where we left out.

syntax -> function * 


`Note` -> When we call the generator function it does not immidiately starts its execution it returns the `iterator`.


`Yield` -> The yield operator is used to pause and resume a generator function.

Calling a generator function constructs a `Generator object`. Each time the generator's next() method is called, the generator resumes execution, and runs until it reaches one of the following:

`A yield expression.` In this case, the generator pauses, and the next() method return an iterator result object with two properties: value and done. The value property is the value of the expression after the yield operator, and done is false, indicating that the generator function has not fully completed.

`The end of the generator function`. In this case, execution of the generator ends, and the next() method returns an iterator result object where the value is undefined and done is true.

`A return statement.` In this case, execution of the generator ends, and the next() method returns an iterator result object where the value is the specified return value and done is true.

`A throw statement.` In this case, execution of the generator halts entirely, and the next() method throws the specified exception.

```

function* fetchNextElement(){

  console.log("I am inside the generator function");

  yield 1;

  yield 2;

  console.log("somewhere in the middle");

  yield 3;

  yield 4;
  
}

const iter = fetchNextElement();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

```

when we call the above function it doest not directly execute the code instead it return a `iterator` and basically it finds the yield keyword adn when it finds it stops the execution and execute the first line of code which is `I m inside the generator function` .

when it encounters `another yield` it again stops the execution and we can say return a object which has a property {value: 0 , done : false}.

This process goes on untill we find a return statement or we consume all the yield and we are at the final line of the code.

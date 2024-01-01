### Types in TypeScript

**These all are `Primitive Types`**

String -> store text

Number -> stores integers, real

Boolean 

undefined

null

bigint

symbol -> special objects that are mimic themselves like an string


**Defining a `variable` in TS**

dataType< variable_name >:number=< value >  // type annotation or type signature


**Union of Types** -> means we can define more than one type for a variable for example 

`let userId : number || string = "26";`


### Defining arrays in TS

let < variable_name > : type[] = [ val1,val2 .... ]

In the above `type means` what type of array we want to define i.e. number,strings etc.

let ids: `number`[]=[1,2,3,4,5];

`Union` ->  let ids: (number | string | boolean)[]=[1, 2, 3, false, "jiten"];

**`Any`** -> if any variable or anything inside a Ts wants to behave just like an normal JS we can use the keyword `any` 


In the above array we can only store numbers but if we use `any` than we can store multiple things at once just like we can store in JS.

**let jsArray : `any` = [1,2,3,4,"jiten",false]**

`let x : any= 20;`

`x = 30;` 

`x = "jiten"`


**Define array in one more way** -> in the form of `tuple` 

tuple means the set of multiple values .

let data1 : [number, string, boolean] = [1, "sanket", true ];



### How to define `types` of an objects

1. classes

2. interfaces


**Interface** -> It is used to define the structure of an object that this object will take all of this method and properties but do not provide any implementation .

Like as in the case of `Classes` we provide the implementation of the member function.

For example 

`Classes`

```

class Car :{

    name:string,
    constructor(name:string){
        this.name=name;
    }

    display(){
        console.log(this.name);  // implement the member function
    }
};

```

`Interface`

```

interface Product {

    name : string,
    price : number,
    brand : string

    display() : void; // we just put that the return type is void.
}

// it just tells that what are the properties and what are the function it did not define how the function should work.

when creating a object we do not call the new keyword in case of interface

``` 

### Defining functions in TS


function < function name >(args) : `return type of function`

```

function sum(a: number , b: number) : number {

    return a + b
}

```

```

function sum(a: number , b ? : number) : number {

    return a + (b || 0)
}

```

`?` in the above represents that `b` is optional and inside the return statement `(b || 0)` means that if the b value is present `pass that value` otherwise `pass 0` .



**`Note`** -> This `Type Checking` process is not happen in runtime it happen in compile time that means when the TS compiler comes in and when it changes the code into Js then only type checking happen.

**`Void`** -> means when we don't want to return anything inside from our functions we use the type as void .

function sum() : void {

}




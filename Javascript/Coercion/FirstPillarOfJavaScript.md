# Pillars of Javascript

## There are 6 pillars of javascript 

1. Coercion -> it means `type conversion` whenever we do an operation based on some set of input we can actually convert the type of input.

These can be done into 2 ways.

1. explicit typecasting -> this conversion can be manually done by `us` as an developer or a user.

2. implicit typecasting -> this conversion can be done automatically which means the types of the input is being convert automatically and this process is known as `coercion` .

## Ques what will be the output of the following 

console.log(1-"0xa") 

Ans -> -9 

firstly javascript convert the left hand side to a number after this it wil take the right hand side which is in `string` it will convert it into a number now we can clearly see that `0x` means a hexadecimal number in a number system . 

`Hexadecimal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "X" (0x or 0X).`

now it will convert this hexadecimal number to a binary number with base 2 so the number is `10`.

Now if we do console.log(1-10) gives us -9.


## To Primitive (input,prefered type)


`prefered type -> optional`


to primitve -> it convert the input to an non object type.

prefered type-> in case when input can be converted to multiple types we take the decision using this.

## Case 1

If the type of `input` is not a `object` then it will directly return it as an `input`.

## Case 2

If `input` is an `Object`

 ### SubCase 1: 

If `preferred type` is not present ,so let hint be `default`. 

**Note** -> Later it will be converted into `Number`

 ### SubCase 2:

2-> If `preferred type` is hint `string` so let hint be `string`.

 ### SubCase 3: 
3-> If `preferred type` is hint `number` ,so let hint be `number`.  



    let obj={

    toString(){
        
      }
    }

By default it returns the default value of toString which is `[object object]` and basically it is an `string` so we can overide it as 

    let obj={

    toString(){
        return 10 or "Let' s learn Javascript"
      }
    };
console.log(obj.toString());

so here we can get the output as either 10 whihc is an `Number` or Let's learn Javascript which is an String.


    let obj={

    valueOf(){

        By default it returns the same object.
      }
    }

But we can override it.

    let obj={

    x:10,
    valueOf(){
        return 10;
      } 
    }

    console.log(obj.valueOf()); -> 10


## To Primitive with To Number

Ques -> let obj={}

console.log(10-obj); 

**output -> ??**


let's breakdown this 

first here will be a **`subtraction(-)`** sign so in this case it will convert its left hand side and hand side to a `number`

**Case 1** -> convert its left side into a Number 

10 is a `number` itself.

**Case 2** -> covert its right side into a number 

**Now in this case there is an `object `and we do not convert it directly**

First we have to do `ToPrimitve` 

To Primitive will take one arguement and a hint here `hint` is an number so it will set hint as a `Number`

In the second step it will call `OrdinaryToPrimitive` here the `hint` is a `number`

It will go to the else state now it will take `valueOf` and `toString`

valueOf(object)  give -> same object

check whether the result is a `non object` type 
in this case `No` now we go back and call `toString` now 

toString give -> [object object] which is a string 

and it is a `non object` so now we return this string to `ToNumber` now we have to convert a string to a number 

In this case `[object object]` we cannot convert it into an `Number` so it will give `NaN` 

**Now the final expression**

console.log(10-NaN) give -> **`Nan`** 
 
**Note** -> If `toString` also gives us an object it will throw an `exception error` 

Example


    let obj={
      x:7 , 
      toString() {
         return {} 
       }
      }

It will give us an `error` 
 


## Addition Operator(+)

**Step 1**

It takes the `lefthand ` and `righthand` side value. 

**Step 2**

It tries to convert them into the `ToPrimitive`.There is no `hint` present

**Step 3**

If the type of any of the side `left` and `right` is a `String` then it will convert them into a `String` and return the `concatination` of both left and right side.

**Step 4**

If the type of any of the side is not `String` then it will convert them into a `Number` and return it.


**Ques** 

let obj={};

console.log(obj);

console.log("18" +  obj ); -> 18[object object]

console.log(18 +  obj ); 18[object object]


## Boolean value

**Undefined, Null, +0, -0, NaN** -> return `false` these are falsy value.

Except the above it always return `true` these are truthy value.

Example` -29` gives ->` true`

## Abstract equality comparison (==)

x-> null and y-> undefined return `true` and `vice versa` is also `true`

x-> Number y-> string -> convert y-> `ToNumber` and then again does `comparison`

x-> String y-> number -> convert x->` ToNumber` and then again does `comparison`

x-> bool convert x-> `ToNumber` and does `comparison` and `vice versa`

x-> is either Number,String or Symbol
                 and 
y-> Object -> We convert Y to `ToPrimitive` and then does the comparison and `vice versa`


If nothing is follow from the above steps then we can simply return **`false`**


### Example

console.log(12=="12") -> true

console.log(false == "0") -> true 

false -> `convert into a Number` -> 0 

"0" -> `convert into a Number` -> 0

console.log(0==0) -> `true`

console.log(null==false) -> false

X -> null -> cannot be comes in any of the above steps 

Y-> false -> y is a boolean -> ToNumber -> 0 

null == 0 -> again compare -> did not comes in any of the above steps so in the last we will return `false`.


## Strict Equality Comparison (===)

`For Numbers`

x is different from y return `false`.

x-> number 

1.1 x-> NaN return false

1.2-> y-> NaN return false

1.3-> x is same as y return true

1.4-> x-> +0 y-> -0 return true and `vice versa` is also `true`

x-> non number 

2.1-> x-> Undefined -> true

2.2-> x-> Null -> true

2.3-> x-> String 

    2.3.1 -> x and y are `exactly` same i.e by length code units at the indices return `true` else return `false`

2.4-> x-> boolean 

    2.4.1 -> x and y both `true` or `false` return `true` else return `false`.

2.5-> x-> symbol 

    2.5.1 -> x and y both `symbol` return `true` else `false`

2.6-> x and y same object return `true` else `false`


## Example 

let obj1= {x:10}

let obj2= {x:10}

let obj3= {y:10}

let obj1= {x:10}

console.log(obj1===obj2); -> gives `false `because it will allocate to the `different` memory location.

console.log(obj1===obj3); -> gives `false `because it will allocate to the `different` memory location.

console.log(obj1===obj1); -> gives `true` because it will allocate to the same memory location.


## Corner Cases

    -> console.log(" " + 0 or (-0) ); 
     0-> "0"

  output -> 0 
    
    -> console.log(" " + [] );
     [] -> " "

  output -> " "
    

    -> console.log(" " + {});
     {} -> [object object]
     
  output -> [object object]
    
    ->console.log(" " + [1,2,3,4]);
     
  output -> 1,2,3,4

    -> console.log(" " + [null,undefined]);
     [null,undefined] -> NaN

  output -> NaN 


**TONUMBER** 

      -> console.log(0 - "010");
     "010" -> convert into -> decimal

  output-> -10

      -> console.log(0 - "O10");
     "O10" -> follwed by O which cannot be converted result NaN

  output -> NaN

     -> console.log(0 - 010);
     010 -> here it is a Number not a String convert it into -> Octal Number
  
  output -> -8
    
     -> console.log(0 - "0xb");
     010 -> convert it into -> Hexadecimal Number
    
  output -> -11

    ``  


## Explicit Cohersion


    console.log(1<2<3) 

    1<2 =true
    true< 3 (true means 1)  1<3 = true

output -> true

    console.log(3>2>1) 

    3>2 = true
    true>1 (true means 1) 1>2 =false

output -> false


###  write a custom function that can give us sign of a number properly in javascript


We already have a `inbuilt` function in javascript `Math.sign()` that can give us the sign of a number.


     console.log(Math.sign(3));
Expected output: 1

     console.log(Math.sign(-3));
Expected output: -1

     console.log(Math.sign(0));
Expected output: 0

     console.log(Math.sign('-3'));
Expected output: -1


Manually write the above function

       function sign(x) 
       { 
        return x > 0 ? 1 : x < 0 ? -1 : 0; 
      }


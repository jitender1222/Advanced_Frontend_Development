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
 



 







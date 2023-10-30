# Pillars of Javascript

## There are 4 pillars of javascript 

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
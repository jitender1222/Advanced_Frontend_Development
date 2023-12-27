
## Scope

Scopes -> The scope is the current context of execution in which values and expression are visible or can be referenced. If a variable or expression is not in the current scope it will not be available for use.

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


`JavaScript executes the code in 2 Phases`

1. Parsing 

2. Code Execution

```

var teacher ="Sanket";

function fun(){

    var teacher ="Pulkit";
    console.log(teacher);
}

function gun(){

    var student = "Sarthak";
    console.log(student);
}


fun();
gun();

console.log(teacher);

```


In the above code as we know Js executes the code in 2 Phase.

During the parsing Phase it go the line 1 and check whether `teacher` is present in the `global` scope or not . If not it will put teacher inside the global scope.

Now it will go to line 2 and check whether the `fun `is present or not if not it will put them inside the `global` scope.

Now it will move inside the fun and here comes the variable `teacher` now this time it will inside the scope of `fun` if `teacher` is present inside the `fun` scope or not if not it will assign the `teacher` to the scope of `fun`.

`Now we comes out to the fun () `. And goes to another function `gun` and do all the above steps again.


### Execution Phase starts

During the execution phase it checks `teacher` belongs to the global scope it will assign the teacher as `Sanket` with the original value.

It will go to the next line now it is a function declaration so untill and unless it will encounter a function call it will not go inside the function .

when it encounter the function scope it will call the function and inside the function it will encounter a variable named as `teacher` now this time teacher is present to the scope of function `fun` so it will put `Pulkit` to that and in the next line we have `console.log` so it prints but it first check whether the variable teacher is present inside the scope of function `fun` if yes it will print `Pulkit`.

Inside the another function it will do the above things again.

Last it will check whether the teacher is present inside global scope if yes it prints its value.


```

var teacher ="Sanket";

function fun(){

    var teacher ="Pulkit";
    content="JS";
    console.log(teacher);
}

function gun(){

    var student = "Sarthak";
    console.log(student);
}


fun();
gun();

console.log(teacher);
console.log(content);

```


All the things are as it is during the `parsing` phase .

When it comes to the execution phase it reaches to a line `content` so content is not present inside the scope of `fun` **so it move one level up to find the content in the global scope but there also content is not present so here comes the `autoglobals` comes into the picture** so if we are assigning a value to variable and that variable is not present inside the any of the scopes `autoglobals` automatically makes that variable global.


Now it will print the `content` as `JS` .



```

var teacher ="Sanket";

function fun(){

    var teacher ="Pulkit";
    content="JS";
    console.log(teacher);
}

function gun(){

    var student = "Sarthak";
    console.log(student);
}

console.log(content);
fun();
gun();

console.log(teacher);

```

It will give us an `error` that content is not defined. Beacuse in this we are using the variable `content`  which is not present inside the global scope.



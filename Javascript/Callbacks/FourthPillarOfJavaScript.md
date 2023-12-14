## Callbacks

fun() -> HOF -> beacuse it will take fn as an arguement.

fn-> function

x-> number

    function fun(x,fn){

        for(let i=0;i<x;i++){
            console.log(i);
        }

        fn();

    }

    fun(10,function exec(){
        console.log("I am Executed");
    })


**CallBacks** -> it is a function which is passed into another function as an arguement which is then invoked inside the outer function to complete some kind of task.

In the above code  `exec` is a callback function.

## Problems with callback

1. Inversion of control

2. Callback Hell


**CallBack Hell**

Callback hell is a basically a readability problem in which the code becomes very messy and it is difficult to debug the code.


Callback hell is `created` when we pass a callback inside the another callback and when this passing  goes long it will become a pyramid like structure this is known as callback Hell. 


```
    a(function(resultFromA){
        b(resultFromA,function(resultFromB){
            c(resultFromB,function(resultFromC){
                .
                .
                .
                .
                .  
            })
        })
    })

```

The above example shows a callback hell problem .


**Inversion of Control**


It is a scenario in which instead of your code controlling when and how certain functions or processes are executed, the control is inverted or handed over to another part of the system. Due to this now we don't have the control for how this function call to someone else.


```

    function doTask(fn,x){  // this whole implementation is done by team A.

        fn(x*x); // calling my callback function with square of x
    }

    //here team B comes

    doTask(function exec(num){ // due to callbacks I am passing control of how exec should be called to doTask this is inversion of control.

        console.log("Woah num is ",num);
    },9);

```

In the above example we have 2 teams `A` and `B` 

Team A -> created a function which is doing the square of a number .

Team B-> uses the function created by team A .

now if there is any issue in the code created by team A so the team B faces problem because now our code is inverted or we can say we hand over the controls of our code to the Team A this problem is known as `inversion of control`


## Synchronous nature of Js

1. Js is sync in nature.

2. Js is single threaded.

By default Javascript is synchronous in nature which means it executes the code line by line and when it comes to the part were the code takes to long to be exceuted it waits and gives enough time to the code to be executed this synchrounous nature is only applicable when we execute valid ecmascript code given by the standards.


## Runtime in Javascript

whenever we write a piece of code inside JS there is a `runtime` which is required to run the piece of code .

Runtime provides all of the extra functionalities which is required to run the valid piece of javascript code.

 Now days we run our javascript code inside the browser here `browser` is a runtime which provides the features which are not native to the javascript in order to make sure that javascript works with full potential inside our browser.


For example -> by using javascript we can manipulate HTML and DOM all the things like `getelementbyid` `getelementbyname` etc these all things are provided by the browser these are not the part of javascript itself.


```

function timeconsumingByLoop(){
    console.log("loop Starts");
    for(let i=0;i<10000000;i++){
        //some task
    }
    console.log("loop ends");
}

function timeConsumingByRuntimeFeature0(){

    console.log("Starting the time");

    setTimeout(function exec0(){
        console.log("Completed the timer 0");

        for(let i=0;i<1000000;i++){
            //some task
        }
    },5000);
}

function timeConsumingByRuntimeFeature1(){

    console.log("Starting the time");

    setTimeout(function exec1(){
        console.log("Completed the timer 1");

        for(let i=0;i<1000000;i++){
            //some task
        }
    },0);
}


function timeConsumingByRuntimeFeature2(){

    console.log("Starting the time");

    setTimeout(function exec2(){
        console.log("Completed the timer 2");

        for(let i=0;i<1000000;i++){
            //some task
        }
    },200);
}

console.log("hi");
timeconsumingByLoop();
timeconsumingByRuntimeFeature0();
timeconsumingByRuntimeFeature1();
timeconsumingByRuntimeFeature2();
timeconsumingByLoop();
console.log("By");


```

**Output**

hi

loopstarts

loopends

starting the time 

starting the time 

starting the time 

loopstarts

loopends

By

completed the timer 1

completed the timer 2

completed the timer 0

## how the above code works 

When the code execution starts and a function call made firstly `timeconsumingbyloop` goes inside the call stack it does all the work and then it comes out from the call stack.

`secondfunction` goes inside the call stack there is a `setTimeout` function so the JS goes to the `runtime ` and notify that I have a set timeout so start the timer and comes back now it will go to the end of the function and the function comes out from the call stack and next function call should be made.

`thirdfunction` goes inside the call stack and same process happen as we disscused above.


In the above code when the timer ends it will move inside the **`Event Queue`** it does not hamper the JS code execution.

From the above first the `0 second` timer goes inside the event queue then the `200ms` timer and last `5000s` timer.

then there comes the **`Event Loop`** it is a kind of infinite loop which keeps checking whether the call stack is empty or not and no global code should be left i.e no function call or print statement should be left.

now what `event loop` does is that first it checks if call stack is empty or not and no code is left then it takes the callback function from the `EventQueue` and put it inside the call stack and now the call stack starts executing the code.



## Promises

Advantages of using a Promises over callback.

1. It increases the readibility of the code.

2. they can solve the problem of inversion of control (IOC).


Promises -> These are special type of objects that get returned immidiately when we call them .


2. Promises act as a placeholder for the data we hope to get back sometime in future.

for example -> let's say we type a url www.xyz.com so in case of call back this function call goes to the runtime and then runtime basically call this and get the result .

But in case of promises when we call this function then immidiately it will return a `promise obj` which will act as a placeholder (means the result that we can expect)


3. We can also attach the functionality we want to execute once the future task is done. once the future task is done promises will automatically execute the attached functionality.


**`Create a Promise`**

Creation of a promise object is `synchronous` in nature because it is native to javascript.

**`Three states of promises`**

1. pending -> when we create a new promise object this is the `default state` it represents work in progress.

2. fulfilled -> if the operation is completed successfully.

3. rejected -> if the operation is not completed successfully.


`Syntax` 

``` 
new Promise(function(resolve,reject){

    //task 
})

```

new -> it is a keyword .

Promise-> it is a constructor used to create a promise object .

`inside the promise constructor it expects a callback function`.

resolve and reject are the normal function in javascript.

if we call the `resolve` function the promise goes to a `fullfilled `state.

if we call the `reject` function the promise goes to a `rejected `state.

if none of them is called then by `default` the promise is in the `pending` state.

inside the pending state the value remain as `undefined`

with whatever `args` we call resolve and reject with gets assigned to the value property.



**write a function to download data from a URL**

   ```
   function downloadData(url,cb){

    console.log("downloading data from url",url);

    setTimeout(function down(){
        console.log("download completed);
        const content="ABCDEF";
        cb(content);
    },5000)
   }

   donwloadData("www.xyz.com",function process(content){
    console.log("download data is:",content);
   })

   ```

**Write a function to save that downloaded data in a file and return that filename**   


```

    function writeFile(data,cb){

        console.log("started writing the file with the given data",data);

        setTimeout(function writeData(){
            console.log("completed writing the data in a file ");
            const filename="file.txt";
            cb(filename);
        },5000)

    }

    writeFile("abcdef",function process(name){
        console.log("file written with name",name);
    })

```

**Write a function to upload the file written in the previous step to a URL**


```

    function uploadFile(url,filename,cb){

        console.log("uploading start with the filename",filename,"to a URL",url);

        setTimeout(function upload(){
            console.log("file uploaded successfully");
            const response=SUCCESS
            cb(response);
        },5000)
    }

    uploadFile(file.txt,function process(filename){
        console.log("fileuploaded successfully",filname)
    })

```

**Combine all of the above 3**

```

function downloadData(url,cb){

    console.log("downloading data from url",url);

    setTimeout(function down(){
        console.log("download completed);
        const content="ABCDEF";
        cb(content);
    },5000)
   }

   function writeFile(data,cb){

        console.log("started writing the file with the given data",data);

        setTimeout(function writeData(){
            console.log("completed writing the data in a file ");
            const filename="file.txt";
            cb(filename);
        },5000)

    }

    function uploadFile(url,filename,cb){

        console.log("uploading start with the filename",filename,"to a URL",url);

        setTimeout(function upload(){
            console.log("file uploaded successfully");
            const response=SUCCESS;
            cb(response);
        },5000)
    }

    download("www.xyz.com",function process (value)){

        console.log("we are going to process the downloaded data",value);

        writeFile(value,function processFileName(filename){
            console.log("we have downloaded and written the file now will upload");

            uploadFile("www.upload.com",filename,function processUpload(response){
                console.log("we have uploaded the file with",response);
            })
        })
    }

```
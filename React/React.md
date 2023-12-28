
## How to start with React

We can make react app by using `CDN` links 

```
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>

<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

```

This is the minified version of react which means it does not contain any extra space commas it is the compact version we have .


**Here’s a step-by-step description of how minification works:**

A web developer creates a JavaScript or CSS file to be used in a web application. These files are formatted for the developer’s convenience, which means they make use of whitespace, comments, long variable names, and other practices for readability.

The developer applies a minification technique (see below) to convert the file into one that’s more optimized, but harder to read. Common minification techniques include removing whitespace, shortening variable names, and replacing verbose functions with shorter, more concise functions.

The web server uses the minified file when responding to web requests, resulting in lower bandwidth usage without sacrificing functionality.

The benefit of minification is that it only needs to be performed when the source file changes. When combined with other compression techniques, minification can greatly reduce bandwidth usage for both the enterprise and the user.



## React Element -> 

In simple terms a react element is a Js object that describes the property of an actual dom node should contain.

**To Create a react element**

React.createElement(type,props,children(optional))



## Transpilers 

Transpilers are source to source converters which means it converts the code from one syntax to another.

`Babel is a javascript transpiler which converts the js code to machine understandable code.`
 
**`OR`**


Transpilers are tools that convert one programming language into another language. In the case of Babel, it converts modern JavaScript syntax into a version that is compatible with all environments. This is particularly important because not all browsers support the latest JavaScript syntax, making it difficult for developers to write code that is compatible with all platforms.

**What is the reason for using babel?**

Well, all the latest javascript features are not supported in every browser yet. So someone needs to do the converting part right? So babel is here to transpile latest javascript features(ES6 features) which are not understandable to every browser to ES5 which is understandable to every browser.


`In case of React Babel is commonly used for converting JSX syntax in React .` JSX is a syntax extension for JavaScript that allows HTML-like elements to be mixed with JavaScript code.However, not all browsers support JSX syntax.


`This is where Babel comes in`. Babel in react, can take the JSX syntax in a React component and transpile it into regular JavaScript code that can be run in any browser. This process happens at build time, so the end user never sees the JSX syntax, only the compiled JavaScript. Babel has full support for JSX syntax, making it an ideal tool for converting JSX syntax in React applications.


## Memory of a Component

Component in react are simple JS functions.

Components often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart.

Components need to “remember” things: the current input value, the current image, the shopping cart. 

So to remember all these things we need to store this inside a component memory which is known as `State` .

When this `State` changes the component `re render` itself.

To maintain the `state` of a component react provides `Hooks`.

`Hooks` are basically Utility functions that react provides by which we can use the core functionality of react. 

`Local variables don’t persist between renders.` When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.

`Changes to local variables won’t trigger renders.` React doesn’t realize it needs to render the component again with the new data.

**To update a component with new data, two things need to happen:**

`Retain the data between renders.`

`Trigger React to render the component with new data (re-rendering).`

**The useState Hook provides those two things:**

`A state variable to retain the data between renders.`

`A state setter function to update the variable and trigger React to render the component again.`


```

import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}


```


**`Anatomy of useState`**

When you call useState, you are telling React that you want this component to remember something:

const [index, setIndex] = useState(0);

The only argument to useState is the initial value of your state variable. In this example, the index’s initial value is set to 0 with useState(0).

Every time your component renders, useState gives you an array containing two values:

The state variable (index) with the value you stored.

The state setter function (setIndex) which can update the state variable and trigger React to render the component again.

Here’s how that happens in action:

const [index, setIndex] = useState(0);

Your component renders the first time. Because you passed 0 to useState as the initial value for index, it will return [0, setIndex]. React remembers 0 is the latest state value.

You update the state. When a user clicks the button, it calls setIndex(index + 1). index is 0, so it’s setIndex(1). This tells React to remember index is 1 now and triggers another render.

Your component’s second render. React still sees useState(0), but because React remembers that you set index to 1, it returns [1, setIndex] instead.
And so on!


**`NOTE`**

State is local to a component instance on the screen. In other words, if you render the same component twice, each copy will have completely isolated state! Changing one of them will not affect the other. 


 

## How to start with React

We can make react app by using `CDN` links 

```
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>

<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

```

This is the minified version of react which means it does not contain any extra space commas it is the compact version we have .

### Note -> React is declarative.


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


`In case of React Babel is commonly used for converting JSX syntax in React .` 


### JSX 

JSX is a syntax extension for JavaScript that allows `HTML-like elements` to be mixed with `JavaScript` code.However, not all browsers support JSX syntax.


`This is where Babel comes in`. Babel in react, can take the JSX syntax in a React component and transpile it into regular JavaScript code that can be run in any browser. This process happens at build time, so the end user never sees the JSX syntax, only the compiled JavaScript. Babel has full support for JSX syntax, making it an ideal tool for converting JSX syntax in React applications.


### `Note` -> 

whenever we have to write a JS expression we can write inside `{}`.

For example 

```

function DogType(){

  const text="cute puppy";

  return (

    <div>

    <h3>{text}</h3>
    
    </div>
  )

}

```

When we use style property inside JSX we have to use `two {}`.

1. First brace is because `style property` expects a JS Object.

2. Second brace is used to `evaluate` the JS expression. Beacuse as we see above any valid JS expression is written inside the `curly braces`.


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


### `Commit and Render`

**Any screen update in a React app happens in three steps:**

`Trigger`

`Render`

`Commit`
 

**Step 1: Trigger a render**

There are `two` reasons for a component to render:

`It’s the component’s initial render.`

`The component’s (or one of its ancestors’) state has been updated.`

**Initial render**

When your app starts, you need to trigger the initial render. Frameworks and sandboxes sometimes hide this code, but it’s done by calling `createRoot` with the target DOM node, and then calling its render method with your component:

```
import Image from './Image.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'))
root.render(<Image />);

```


**Re-renders when state updates**

Once the component has been initially rendered, you can trigger further renders by updating its `state` with the `set function`. Updating your component’s state automatically queues a render.



**Step 2: React renders your components**


After you trigger a render, React calls your components to figure out what to display on screen. “Rendering” is React calling your components.

1. On initial render, React will call the root component.

2. For subsequent renders, React will call the function component whose state update triggered the render.

This process is recursive: if the updated component returns some other component, React will render that component next, and if that component also returns something, it will render that component next, and so on. 

The process will continue until there are no more nested components and React knows exactly what should be displayed on screen.


```

export default function Gallery() {
  return (
    <section>
      <h1>Inspiring Sculptures</h1>
      <Image />
      <Image />
      <Image />
    </section>
  );
}

function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}

```


3. During the initial render, React will create the DOM nodes for `<section>, <h1>,` and three `<img>` tags.

4. During a re-render, React will calculate which of their properties, if any, have changed since the previous render. It won’t do anything with that information until the next step, the commit phase.


**Step 3: React commits changes to the DOM**

After rendering (calling) your components, React will modify the DOM.

For the initial render, React will use the appendChild() DOM API to put all the DOM nodes it has created on screen.

For re-renders, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.

**`React only changes the DOM nodes if there’s a difference between renders.`**



### Note :

If parent component re render due to any reason then the child component is also re render.

If in any case the props that we pass and the value of the props did not change but the parent component change then the child also re render.

To avoid this we can use a hook named as `useMemo` .

If we use useMemo hook even if our parent re render our child is not re render untill our props value are same.

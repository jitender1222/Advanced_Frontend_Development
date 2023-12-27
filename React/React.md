
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

 
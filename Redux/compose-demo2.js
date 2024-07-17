import { compose } from "redux";

function removeSpaces(str){

    return str.split(" ").join("");
}

function repeatString(str) {

    return str.repeat(2);
}

function makeUpperCase(str){

    return str.toUpperCase();
}

function makeItalics(str){

    return str.italics();
}

let str="hello there how are you ?"

const composeFunction=compose(removeSpaces,repeatString,makeUpperCase,makeItalics);

console.log(composeFunction(str));

//  compose method takes a bunch of functions and compose them into a chain of functions.

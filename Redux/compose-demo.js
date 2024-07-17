

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

const str="hello there how are you ?"

// console.log(makeItalics(makeUpperCase(repeatString(removeSpaces(str)))))


// alternative of above method

const arr=[str,removeSpaces,repeatString,makeUpperCase,makeItalics];

const result= arr.reduce((prevAns,currFunc)=>{

    return currFunc(prevAns);
})

console.log(result);


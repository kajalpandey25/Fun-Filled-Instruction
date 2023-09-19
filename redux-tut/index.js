import { compose } from "redux";


function removeSpaces(string){
    //  remove all the space characters from the string 
    return string.split(" ").join("");
}


function repeatString(string){
    return string+string;

}

function toUpperCase(string){
    return string.toUpperCase();
}


let string = "hi there what are you doing ?";
const result1 = removeSpaces(string);
const result2 = repeatString(result1);
const result3 = toUpperCase(result2);
console.log(result1, result2, result3);

console.log(toUpperCase(repeatString(removeSpaces(string))));

const composedFunction = compose(removeSpaces, repeatString, toUpperCase);
console.log(composedFunction(string))
//  f(x) g(x) h(x) -> f(g(h(x)))
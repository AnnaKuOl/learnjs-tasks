"use strict";
let someObj = {}; 
function A() { 
    return someObj;
}
function B() { 
    return someObj; 
}

let a = new A();
let b = new B();

alert( a == b ); // true
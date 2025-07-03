//mainly there is only two types of data based upon storing data & calling like call by value ad call by refrence

//JavaScript is a dynamically typed language.

//  Primitive
//like call by value 
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false    //typeof value is boolean
const outsideTemp = null    //typeof vlaue is object
let userEmail;
 
const id = Symbol('123')    //symbol
const anotherId = Symbol('123')   //symbol

console.log(id === anotherId);  //false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
//typeof is object
let myObj = {
    name: "hitesh",
    age: 22,
}  
//typeof is object

const myFunction = function(){
    console.log("Hello world");
}
//typeof myFunction is function or functionobject but for remaining two(array and object) it is object only

console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3
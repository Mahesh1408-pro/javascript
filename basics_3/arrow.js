const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
   // THIS is used to refer current context in objects but not in functions
}

// user.welcomeMessage()    // hitesh, welcome to the website
// user.username = "sam"    // here context is changed 
// user.welcomeMessage()    // sam, welcome eto the website

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//arrow function 
//  variable name = () => {}  //defination
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2   //explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )  //implicit return ---return word ka na use karna

const addTwo = (num1, num2) => ({username: "hitesh"})  // check ??


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
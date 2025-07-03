// array

const myArr1 = [0, 1, 2, 3, 4, 5,mahesh,true]  //still it is an array becoz in js there is no need to have all elements of same data types
const myArr = [0, 1, 2, 3, 4, 5]

const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()  //last inserted value ko uda dete hai

// myArr.unshift(9)  //inserted at start of array
// myArr.shift()    //delete first element from the aray 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()   //join changes the type of array to the string 

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);   //1 2
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); //0 4 5
console.log(myn2); //1 2 3

//splice manipulates original array like it just excludes the spliced part
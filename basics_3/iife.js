// Immediately Invoked Function Expressions (IIFE)
//global scope ke pollution se problem hoti hai kai bar so global variable ke pollution ko hatane liye iife ka use kiya


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  //; is imp here

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

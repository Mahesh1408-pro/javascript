//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c); //var goes beyond the scope



function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);   //error

     two()

}

// one()  //chote bado se icecream lete tik lagte hai but bade chotose ice-cream lete sahi nahi lagenge
          //so two can access variables of one but one can't acess two's variables


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);   //error
}

// console.log(username);  //error  because username is not defined in this scope


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  //not an error

function addone(num){
    return num + 1
}



addTwo(5) //error  //accessed before declaration(as it is declared differently)
const addTwo = function(num){
    return num + 2
}   

//this is hoiesting---from intresting
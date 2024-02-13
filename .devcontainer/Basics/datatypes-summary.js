// primitve  datatype

// 7 types: string , number, boolean, null, undefine, symbol, bigint.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 84713479013840138409234n
 
// reference (Non primitive)
// Arary, Object, Functions.

const heros =["shaktiman","naagraj","Dooga"]

// let myobj{
//     name:"sumit",
//     age:23,
// }

const myfunction=function(){
    // console.log("hello world");
}

// console.log(typeof anotherId);

// ++++++++++++++++++++++++++----------++++++++++++++++++++++++
// stack(primitive) heap(non-primitive)             */excalidraw use for digital board*/

let myChannelName = "CodeWithSumit"
let anotheName= myChannelName
anotherName = "SumitCodes"
console.log(myChannelName);
console.log(anotheName);

let userOne={
    email: "sumit@google.com",
    upi: "sumit@ybl"
}
let userTwo= userOne
 userTwo.email= "kaushik@google.com"

 console.log(userTwo.email);
 console.log(userOne.email);
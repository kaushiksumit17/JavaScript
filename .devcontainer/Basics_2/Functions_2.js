function cartPrice(val1, val2, ...num1)
{
    return num1
}
// console.log(cartPrice(200, 250, 400, 2000));

const User={
    username: "sumit" ,
    age: 25,
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} price is ${anyobject.price} age of user${anyobject.age}`);
}
handleObject(User)

const myNewArray =[200,400,100,2000] 

function returnSecondValue (getArray){
    return getArray[0]
}
console.log(returnSecondValue(myNewArray));
const user = {
    username: "sumit",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Arpit"
// user.welcomeMessage() 
// // console.log(this);

// const chai = function (){
//     let username= "sumit "
//     console.log(this.username);
     
// }
const chai = () =>  {
    let username= "sumit "
    console.log(this);
     
}

// chai()

//  const addTwo = (num1 , num2)=>{
//     return num1+num2
//  }

// const addTwo = (num1 , num2) => num1 + num2

// const addTwo = (num1 , num2) => (num1+num2) 

const addTwo = (num1 , num2 ) => ({username: "sumit"}) 
//  console.log(addTwo(3,4)); 

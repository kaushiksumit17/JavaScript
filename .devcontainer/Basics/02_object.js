// const tinderUser= new Object()
const tinderUser = {}

tinderUser.id= "123abc"
tinderUser.name= "sammy" 
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"sumit@gmail.com",
    fullname:{
        userFullName:{
             firstname: "sumit",
             lastname:"kaushik",
        }
    }
}
// console.log(regularUser.fullname.userFullName.lastname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj3=Object.assign({},obj1,obj2,obj4)
// console.log(obj3);
// console.log(...obj1,...obj2);

const users = [
{
    id:1,
    email:"sumit@gmail"
},
{
    id:1,
    email:"sumit@gmail"
},
{
    id:1,
    email:"sumit@gmail"
}

]
users[1].email
// console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// let a = 1000;

// if(a>200){
//     console.log("greater then 200");
// }
// else if(a>500){
//     console.log("greater then 500");
// }
// else{
//     console.log("equal to 1000")
// }

//  scope and hoisting
// console.log(addone(5));
// function addone(num){
//     return num+1
// }

// console.log(addtwo(5));
// let addtwo = function(num){
//     return num+2;
// }

// this keyword

// const user={
//     username:"hitesh",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username} , welcome`)
//         // console.log(this);
//     }
// }

// user.welcomeMessage()

// user.username="chirag"

// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username= "chirag"
//     console.log(this);
// }
// chai()
// let chai = ()=>{
//     let username= "chirag"
//     console.log(this);
// }
// chai()

// arrow fxn

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }

// const addTwo=(num1,num2)=>{return num1+num2}
// console.log(addTwo(4,5));

// IIFI 
// (function chai(){
//     console.log(`DB CONNECTED`);
// })();

// ((name)=>{console.log(`DB CONNECTED TWO ${name}`);})("chirag");
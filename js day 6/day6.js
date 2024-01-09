// by constructor
Object.create  


//by literals 
const mySym= Symbol("key1");

let JsUser={
    name: "chirag",
    age: 18,
    [mySym]:"myKey",
    location: "Kotputli",
    email: "chirag@google.com",
    isLoggedIn: false,
    LastLoginDay:["Monday", "Saturday"]
}



// how to access
// console.log(JsUser.name);
// console.log(JsUser.email);
// console.log(JsUser["age"]);
// console.log(JsUser[mySym]);
// Object.freeze(JsUser)
// JsUser.email="chirag@chatgpt.com"
// console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("hello js user")
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name} `)
}
console.log(JsUser.greetingTwo());


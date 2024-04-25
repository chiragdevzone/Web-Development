"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var varibale = 8;
// varibale = 'p';
varibale = 2;
var a;
// a =5;
a = "abc";
var b;
b = true;
// b='abc';
// array
// let arr = ['a','b',5,false,()=>{return 'b';},{a:1,b:2}]
var arr;
arr = ["a", 4, function () { }, {}];
//object
// let obj = {
//   name: "alis",
//   subjCode: 1223,
// };
// obj['class'] = fifth; this is a loophole in ts that it is accepting this
var obj;
obj = {
    name: "flise",
    subCode: 1223,
};
obj["class"] = "fifth"; // weather you explicitly define the types of an object or just initialize it we can add other properties rather than the types in the object by this method . yes surely it is a loophole of typescript xD.
var obj2;
obj2 = {
    name: "chirag",
    subject: ["math", 2233, "english", 3344],
    code: [2233, "rj"],
};
var fun = function (detail) {
    console.log("the name is ".concat(detail.name, " and the age is ").concat(detail.age));
};
fun({ name: "chiag", age: 22 });
var fun2 = function () {
    throw Error;
};
var service = {
    name: "chirag",
    subscription: function (id, offer) {
        if (id === void 0) { id = "1223"; }
        if (offer === void 0) { offer = 10; }
        console.log("subscription started");
    },
};

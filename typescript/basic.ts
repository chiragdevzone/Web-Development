let varibale = 8;
// varibale = 'p';
varibale = 2;

let a: string;
// a =5;
a = "abc";

let b: boolean;
b = true;
// b='abc';

// array

// let arr = ['a','b',5,false,()=>{return 'b';},{a:1,b:2}]
let arr: (string | number | Function | Object)[];
arr = ["a", 4, () => {}, {}];

//object

// let obj = {
//   name: "alis",
//   subjCode: 1223,
// };

// obj['class'] = fifth; this is a loophole in ts that it is accepting this

let obj: { name: string; subCode: number };

obj = {
  name: "flise",
  subCode: 1223,
};

obj["class"] = "fifth"; // weather you explicitly define the types of an object or just initialize it we can add other properties rather than the types in the object by this method . yes surely it is a loophole of typescript xD.

// console.log(obj);

export {};

let obj2: {
  name: string;
  subject: (string | number)[];
  code: [number, string];
};

obj2 = {
  name: "chirag",
  subject: ["math", 2233, "english", 3344],
  code: [2233, "rj"],
};

// function

interface funtype {
  name: string;
  age: number;
}

let fun = (detail: funtype): void => {
  console.log(`the name is ${detail.name} and the age is ${detail.age}`);
};

fun({ name: "chiag", age: 22 });

let fun2 = (): never => {
  throw Error;
};

interface fun3type {
  name: string;
  subscription: (id: string, offer: number) => void;
}

let service: fun3type = {
  name: "chirag",
  subscription(id = "1223", offer = 10) {
    console.log("subscription started");
  },
};

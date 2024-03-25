// matchAll, includes, startsWith, endsWith

// let text="I love cats. Cats are very easy to love. Cats are very Popular."
// console.log(text.matchAll("Cats"));

// let text="Hello world, welcome to the universe.";
// console.log(text.includes("world"));
// console.log(text.includes("world", 12));
// console.log(text.startsWith("Hello"));
// console.log(text.startsWith("Hello",5));
// let text = "Hello world, welcome to the universe.";
// console.log(text.endsWith("world",11));
// let text="John Doe";
// console.log(text.endsWith("John", 4));

// numbers
// toString
// console.log(typeof num.toString());
// console.log(num.toString());
// let num=100000000000;
// console.log(typeof num.toFixed(3));
// console.log(num.toFixed(3));
// console.log(typeof num.toPrecision(10));
// console.log(num.toPrecision(10));
// console.log(num.toLocaleString("en-IN"));

// console.log(Math.abs(-4));
// console.log(Math.round(4.633));
// console.log(Math.ceil(1.1));
// console.log(Math.floor(2.2));
// console.log(Math.sqrt(25));
// console.log(Math.pow(2,3));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

// console.log(Math.random());
// console.log(Math.floor((Math.random()*10)+1));
// const max=20
// const min=10
// console.log(Math.floor(Math.random()*(max-min+1)+min));

// dates and time
// let myDates=new Date
// console.log(myDates);
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toISOString());
// console.log(myDates.toJSON());
// console.log(myDates.toLocaleDateString());
// console.log(myDates.toLocaleString());

// let myCreatedDate=new Date(2023,0,23);
// let myCreatedDate=new Date(2023,0,23,14,3);
// let myCreatedDate=new Date("2023-01-14");
// let myCreatedDate=new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// let myCreatedDate=new Date("12-11-2023");
// console.log(myCreatedDate.getTime());

// console.log(Math.floor((Date.now()/1000)));

let mydate = new Date()
// console.log(mydate.getMonth()+1);
console.log(mydate.toLocaleString('default',{weekday:"long"}));



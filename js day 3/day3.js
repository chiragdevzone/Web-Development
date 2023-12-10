const name = "chirag"
let repoCount = 50

// console.log(name + repoCount + "repo"); //bad practice , it was use earlier
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //good practice

//    js length

// let text = new String ('abcdefghijklmnopqrstuvwxyz') //another way to declare string
// console.log(text.length);

    //  js slice, substing, substr

// let text = new String ('abcdefghijklmnopqrstuvwxyz')
// console.log(text.slice(-20,13));
// console.log(text.substring(-20,13));
// console.log(text.substr(0,5));

    //js replace , replaceAll, toUpperCase, toLowerCase, trim, trimEnd, trimStart, padStart, padEnd

// let text = "ChIrAg CHIRAG chirag"
// console.log(text.replace(/Chirag/i, "Chiku"))
// console.log(text.replace(/chirag/g, "Chiku"))

// let text=new String("dog dog dog")
// console.log(text.replaceAll("dog", "cat"))


// let text1="hello world!"
// console.log(text1.toUpperCase())
// let text2="HELLO WORLD!"
// console.log(text2.toLowerCase())

// let text1="Chirag"
// let text2="Sankhla"
// console.log(text1.concat(" ",text2));

// let text="         Hello             World!           ";
// console.log(text.trim());
// console.log(text.trimEnd());
// console.log(text.trimStart());

// let text="5";
// console.log(text.padEnd(4,"x"));
// console.log(text.padStart(4,"@"));
// let num=5;
// let text=String(num);
// console.log(text.padEnd(5,"^"));

// charAt, split
// let text= "chirag"
// console.log(text.charAt(2))
// console.log(text.charCodeAt(0));
// console.log(text[0]);

// let text="a b| c d | f"
// const myArray=text.split("|");
// console.log(myArray);


//js string search -> indexOf, lastIndexOf, search, match, 
// let text="please locate where 'locate' occurs"
// console.log(text.indexOf("locate"));
// console.log(text.lastIndexOf("locate"));
// console.log(text.indexOf("locate",15));
// console.log(text.lastIndexOf("locate",15));
// console.log(text.search("locate"));
// console.log(text.search(/locate/));

// let text="The rain in SPAIN stays mainly in the plain";
// console.log(text.match("ain"));
// console.log(text.match(/ain/));
// console.log(text.match(/ain/g));
// console.log(text.match(/ain/gi));

let text = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator=text.matchAll(/cats/g);
console.log(iterator);




function addTwo(num:number):number{
  return num+2
}

let sum = addTwo(5)
let sum2 = addTwo(9)



let signup = (name:string, email:string, isPaid:boolean = false)=>{}

signup("chirg", "chirag@gmail.com")

// function check(num:number):string{
//   if (num>5) {
//     return "this is greater "
//   }
//   return false
// }

// let heros = ["thor", "ironman", "hulk"]
let heros = [1, 2, 3]

heros.map((hero):string=>{
  return `this hero is ${hero}`
})

function fail(msg: string): never {
  throw new Error(msg);
}





export {}
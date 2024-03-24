let id :string | number = 33
id = "33"
id = 66

type User = {
  name: string
  id :  number
}

type Admin = {
  username : string
  id: number
}

let chirag:User | Admin = {name: "chirag", id: 1234} 
chirag = {username:"ch", id:1234}

//function

//  function getDBId(id:number | string){
//   console.log(`the id is ${id}`);
  
//  }

function getDBId(id:number | string){
  if (typeof id === "string") {
    id.toLowerCase()
  }
}

//array

let data:number[] = [1,2,3]
let data2:string[] = ["1","2","3"]
let data3: (string | number) [] = [1,2,"3"]

let pi:3.14 = 3.14


let seatAllotment:("aisle" | "middle" | "window" )
seatAllotment = "aisle"
// seatAllotment = "crew"

export {}
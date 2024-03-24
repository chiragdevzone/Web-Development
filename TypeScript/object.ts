// function createUser({name: string , isPaid: boolean}){}

// let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}

// createUser(newUser)

// function createCourse():{name:string, price:number}{
//   return {name:"ReactJS", price:399}
// }

type User = {
  name: string;
  email: string;
  isActive: boolean
}

function createUser(user:User):User{
return {name: "chirag", email: "chirag@gmail.com", isActive:false}
}

createUser({name: "chirag", email: "chirag@gmail.com", isActive:false})

type anotherUser = {
  readonly _id:string
  name:string
  email:string
  isActive:boolean
  creditcardDetails?:number
}

let myUser:anotherUser = {
  _id:"12345",
  name:"chirag",
  email:"chirag@chirag",
  isActive:true,

}

myUser.email="c@c"
// myUser._id = "4455"

type cardNumber = {
  cardnumber:string
}

type cardDate = {
  carddate: string
}

type cardDetails = cardNumber & cardDate & {
  cvv:number
}

let shopping:cardDetails={
  cardnumber:"1223",
  carddate : "15567",
  cvv: 122211
}

export {}
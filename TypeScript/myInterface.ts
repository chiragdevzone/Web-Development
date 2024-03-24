interface User {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string,
  // startTrial: ()=>string,
  startTrial():string,
  getcoupon(couponname: string, value:number): number
}

interface User{
  githubToken: string
}

interface Admin extends User{
  role: "admin" | "ta" | "learner"
}

const newUser:Admin = {dbId: 1234, email:"c@c.com", userId:1122, googleId:"chirg@google.com", startTrial: ()=>{
  return "trial started !"
}, getcoupon:(name:"chirag", off:10)=>{
  return 10
}, githubToken:"github", role:"admin"}

export {}
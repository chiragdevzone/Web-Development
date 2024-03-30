// class User {
//   email: string;
//   name: string;
//   readonly city: string = "kotputli";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// const chirag = new User("c@c.com", "chirag");
// // chirag.city = "jaipur";

class User {
  protected _courseCount = 1;
  readonly city: string = "kotputli";
  constructor(public email: string, public name: string) {}
  get coursecount(): number {
    return this._courseCount;
  }
  set coursecount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("course count should be more then 1");
    }
    this._courseCount = courseNum;
  }
}

class subUser extends User {
  changeCourseCount() {
    this._courseCount = 4;
  }
}
const chirag = new User("c@c.com", "chirag");
console.log(chirag.email);

export {};

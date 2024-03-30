"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var id = 33;
id = "33";
id = 66;
var chirag = { name: "chirag", id: 1234 };
chirag = { username: "ch", id: 1234 };
//function
//  function getDBId(id:number | string){
//   console.log(`the id is ${id}`);
//  }
function getDBId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = [1, 2, "3"];
var pi = 3.14;
var seatAllotment;
seatAllotment = "aisle";

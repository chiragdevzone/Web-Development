"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
var sum = addTwo(5);
var sum2 = addTwo(9);
var signup = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
signup("chirg", "chirag@gmail.com");
// function check(num:number):string{
//   if (num>5) {
//     return "this is greater "
//   }
//   return false
// }
// let heros = ["thor", "ironman", "hulk"]
var heros = [1, 2, 3];
heros.map(function (hero) {
    return "this hero is ".concat(hero);
});
function fail(msg) {
    throw new Error(msg);
}

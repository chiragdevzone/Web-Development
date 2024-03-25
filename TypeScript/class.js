"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "kotputli";
    }
    Object.defineProperty(User.prototype, "coursecount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("course count should be more then 1");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var subUser = /** @class */ (function (_super) {
    __extends(subUser, _super);
    function subUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    subUser.prototype.changeCourseCount = function () {
        this._courseCount = 4;
    };
    return subUser;
}(User));
var chirag = new User("c@c.com", "chirag");
console.log(chirag.email);

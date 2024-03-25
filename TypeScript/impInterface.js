"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var instagram = /** @class */ (function () {
    function instagram(camermode, filter, brust) {
        this.camermode = camermode;
        this.filter = filter;
        this.brust = brust;
    }
    return instagram;
}());
var youtube = /** @class */ (function () {
    function youtube(camermode, filter, brust) {
        this.camermode = camermode;
        this.filter = filter;
        this.brust = brust;
    }
    youtube.prototype.createStory = function () {
        console.log("story created");
    };
    return youtube;
}());

"use strict";
//Basic Types
let mynum = 9;
let myname = "SOTh";
let myexistence = true;
//Tuple
let person = [1, 'Brad', true];
//Tuple Array
let employee = [
    [1, "Band"],
    [2, "Bond"],
    [3, "Bend"],
];
//Union
//Union is when you can use two or more different types in one variable
let pid;
pid = '9';
//Enum
//Enum is nested constant variable
var Player;
(function (Player) {
    Player["race"] = "human";
    Player["gender"] = "male";
    Player["classRank"] = "warloc";
})(Player || (Player = {}));
;
//Object
let playerData = {
    id: 1,
    name: "John Barbaro"
};
let warlock = {
    1: "novice",
    2: "advance",
    3: "master"
};
//Type Assertion
//Type Assertion are changing Right value to different type
let cid = 1;
let customerId1 = cid;
let customerId2 = (cid + 1);
//Function wit Parameter
function adding(a, b) {
    return a + b;
}
//Void Function
function log(message) {
    console.log("Transmited Msg: ", message);
}
log(playerData);
const subs = (x, y) => x - y;
;
const mult = (x, y) => x * y;

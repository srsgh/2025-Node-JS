// require("./anotherfile.js"); //CJS: includes one module into another

// const f1 = require("./anotherfile.js"); //CJS: includes one module into another
// f1(); //error bc its private

// const anotherfile = require("./anotherfile.js"); //CJS: includes one module into another
// console.log(anotherfile.v1);
// console.log(anotherfile.f1());

// /* CJS
//another way of importing exports from a module
const { v1, f1 } = require("./anotherfile.js"); //CJS: obj destructuring
// // const { v1, f1 } = require("./anotherfile"); //CJS: obj destructuring
console.log(v1);
console.log(f1());
// */

/*
//MJS
import { v1, f1 } from "./anotherfile.js";
console.log(v1);
console.log(f1());
*/

// let x = 1;
// let y = 2;
// console.log("here: " + x + y);

// console.log(global); //for Nodejs Global object is global
// console.log(this); //empty object
// console.log(globalThis); //globalThis by ECMA refers to global obj of current env
// console.log(globalThis === global); //true

//How to use Nested Modules?
//basic way to import -
// const { msg1 } = require("./container1/inside1.js");
// const { msg2 } = require("./container1/inside2.js");
//adv way to import- to access only via container1- this is going to use index.js of container1
const { msg1, msg2 } = require("./container1");
console.log(msg1);
console.log(msg2);

//Import Data json into app.js
const data1 = require("./data1.json");
console.log(data1);

//Import CORE NODE JS Modules: - node:modulename
const util = require("node:util");
console.log(util);

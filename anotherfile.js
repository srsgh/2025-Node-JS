console.log("This line is form another js file");
// /*
var v1 = 0; //CJS
function f1() {
  console.log("f1 function");
}
// */

// module.exports = f1; //CJS
// module.exports = {v1: v1,f1: f1,};//CJS

//CJS: another way to write same obj - shorthand
// module.exports = {v1,f1,};

//export by module.exports.varfnname, since module.exports is {}
module.exports.v1 = v1;
module.exports.f1 = f1;

/*
//MJS
export var v1 = 0;
export function f1() {
  console.log("f1 function");
}
*/

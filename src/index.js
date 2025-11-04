"use strict";
exports.__esModule = true;
exports.main = exports.printNameAndAge = void 0;
console.log("this page is index!");
function printNameAndAge(name, age) {
    if (age == 12)
        console.log(name + " is bat mitzva");
    else {
        if (age == 13)
            console.log(name + " is bar mitzva");
        else
            console.log(name + " is " + age + " years old");
    }
}
exports.printNameAndAge = printNameAndAge;
function main() {
    var name = "sari";
    var age = 12;
    printNameAndAge(name, age);
}
exports.main = main;
main();

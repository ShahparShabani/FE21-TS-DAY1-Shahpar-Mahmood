"use strict";
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);
for (let val of numbers) {
    let result = 1;
    let multiplication;
    multiplication = val * 1;
    result = multiplication;
    document.getElementById("table1").innerHTML += `<tr> ${val}  * 1   =   ${result}</tr>`;
}
for (let val of numbers) {
    let result = 1;
    let multiplication;
    multiplication = val * 2;
    result = multiplication;
    document.getElementById("table2").innerHTML += `<tr> ${val}  * 2   =   ${result}</tr>`;
}
//  Basic2
const obj = {
    fName: "Mahmood",
    lName: "Al Qaisi",
};
document.getElementById("display-name").innerHTML = `<p class="mb-2"> My first Name is  ${obj.fName} and my Last Name is ${obj.lName}</p>`;
//  console.log(obj.lName)
var objArray = [obj];
// console.log(objArray[0].lName);
for (let i = 0; i < 10; i++) {
    objArray.forEach(function (val, x) {
        // console.log(objArray)
        document.getElementById("display-name").innerHTML += `<p class="m-0"> ${val.fName} ${val.lName} </p>`;
    });
}
setTimeout(() => {
    for (let i = 0; i < 10; i++)
        console.log(objArray[0].lName);
}, 2000);
// Basic 3
var namesArray = ["hello", "im", "Mahmood"];
// for loop for index 
for (let i in namesArray) {
    console.log(i);
}
//  for loop for Values
for (let value of namesArray) {
    console.log(value);
}
namesArray.forEach(function (a, b) {
    console.log(a, b);
});

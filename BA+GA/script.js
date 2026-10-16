console.log("file connected");

// keyword identifier/varibalename assignment data
let price = 4000; // number 
const discount = false;// boolean , null ,undefiend 
// Object , Array,function  , Symbol , BigInt

data = "hello world";
console.log(data);


// var keyword 
// scope - globally scoped and functional scoped
// we can reassign value .
// reclaration is also possible  

// function test() {
//     var username = "harry";
//     console.log(username)
// }
// console.log(username)
// hoisting  , moved all the declration to the top of the  file  , but it cannot move the data
console.log(user)
var user = "harry";//string

console.log(user);
user = 100; // reassignment
console.log(user);
var user = "another user"; // redeclaration
console.log(user);


// let and const
//  Let keyword is blocked scoped variable,
// we can reassign its value , but cannot redeclare it.

// console.log(time);
let time = "morning";
console.log(time);
// {
//     let date = 12 ;
// }
// console.log(date);it show error becauseof blocked scope of let keyword
time = "evening";
console.log(time)

// var time = "night"; redeclaration isnot possible here

// let and const
//  const keyword is blocked scoped variable,
// we cannot reassign its value , and also cannot redeclare it.
const For = "raj";

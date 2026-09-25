console.log("hello world");
// alert("this is an alert");


user = "Hello world";
// var , let ,const 
console.log(Name)
// keyword
// for commenting any code  use  ctrl + / 
// syntax  
// keyword identifer/variablename assignmentoperator  data 
var Name = "raj";
// rules
// 1 Globally declrared and functional scoped, reassignment is possible and
// aslo redeclration is possible .\
console.log(Name)
Name = 100;//reassignment
console.log(Name);

var Name = "another person";//redeclration
console.log(Name);

function Sum() {
    var count = 0;

}
// console.log(count)
let num1 = 10;
// ES6 in 2015 , blocked scoped variable,
//reassignment is possible but redeclration is  not possible.
// console.log(newdata)
let newdata = "new data outtside";
{
    let data = "new data inside";
    console.log(data, " afterinside the block")
}
console.log(newdata);

newdata = "another data";
console.log(newdata);

// var newdata = "76"; redeclration is not possible
// let newdata = "76"; //redeclration is not possible

const price = 90000;
console.log(price);
// price = 8000;
// const price = 70000 //
 
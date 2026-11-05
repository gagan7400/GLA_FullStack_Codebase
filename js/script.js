// // // // // // // // // // // // // // console.log("hello world");
// // // // // // // // // // // // // // // alert("this is an alert");


// // // // // // // // // // // // // // user = "Hello world";
// // // // // // // // // // // // // // // var , let ,const 
// // // // // // // // // // // // // // console.log(Name)
// // // // // // // // // // // // // // // keyword
// // // // // // // // // // // // // // // for commenting any code  use  ctrl + / 
// // // // // // // // // // // // // // // syntax  
// // // // // // // // // // // // // // // keyword identifer/variablename assignmentoperator  data 
// // // // // // // // // // // // // // var Name = "raj";
// // // // // // // // // // // // // // // rules
// // // // // // // // // // // // // // // 1 Globally declrared and functional scoped, reassignment is possible and
// // // // // // // // // // // // // // // aslo redeclration is possible .\
// // // // // // // // // // // // // // console.log(Name)
// // // // // // // // // // // // // // Name = 100;//reassignment
// // // // // // // // // // // // // // console.log(Name);

// // // // // // // // // // // // // // var Name = "another person";//redeclration
// // // // // // // // // // // // // // console.log(Name);

// // // // // // // // // // // // // // function Sum() {
// // // // // // // // // // // // // //     var count = 0;

// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // console.log(count)
// // // // // // // // // // // // // // let num1 = 10;
// // // // // // // // // // // // // // // ES6 in 2015 , blocked scoped variable,
// // // // // // // // // // // // // // //reassignment is possible but redeclration is  not possible.
// // // // // // // // // // // // // // // console.log(newdata)
// // // // // // // // // // // // // // let newdata = "new data outtside";
// // // // // // // // // // // // // // {
// // // // // // // // // // // // // //     let data = "new data inside";
// // // // // // // // // // // // // //     console.log(data, " afterinside the block")
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // console.log(newdata);

// // // // // // // // // // // // // // newdata = "another data";
// // // // // // // // // // // // // // console.log(newdata);

// // // // // // // // // // // // // // // var newdata = "76"; redeclration is not possible
// // // // // // // // // // // // // // // let newdata = "76"; //redeclration is not possible

// // // // // // // // // // // // // // const price = 90000;
// // // // // // // // // // // // // // console.log(price);
// // // // // // // // // // // // // // // price = 8000;
// // // // // // // // // // // // // // // const price = 70000 //

// // // // // // // // // // // // // // // cannot start variable name with number , special character except $ and _
// // // // // // // // // // // // // // // donot use any special character in variable name except $ and _
// // // // // // // // // // // // // // // donot use any space in the variable name
// // // // // // // // // // // // // // // donot use any reserved keyword in the variable name
// // // // // // // // // // // // // // // data `types` 
// // // // // // // // // // // // // // // number, string, boolean, null, undefined, object, array, function ,Symbol ,BigInt.
// // // // // // // // // // // // // // // typeof operator is used to check the data type of the variable
// // // // // // // // // // // // // let num = 100;
// // // // // // // // // // // // // console.log(typeof num);
// // // // // // // // // // // // // let str = "hello world";
// // // // // // // // // // // // // console.log(typeof (str));

// // // // // // // // // // // // // // operators
// // // // // // // // // // // // // // arithmatic operators + , - , * , / , % ,**
// // // // // // // // // // // // // let a1 = 10;
// // // // // // // // // // // // // let a2 = 20;
// // // // // // // // // // // // // console.log(a1 + a2);
// // // // // // // // // // // // // console.log(a1 - a2);
// // // // // // // // // // // // // console.log(a1 * a2);
// // // // // // // // // // // // // console.log(a1 / a2);
// // // // // // // // // // // // // console.log(a1 % a2);
// // // // // // // // // // // // // console.log(a1 ** a2);

// // // // // // // // // // // // // // comparison operators 
// // // // // // // // // // // // // // < , > , <= , >= , == , === , != , !==
// // // // // // // // // // // // // let num1 = 10;
// // // // // // // // // // // // // let num2 = '10';

// // // // // // // // // // // // // console.log(num1 < num2);
// // // // // // // // // // // // // console.log(num1 > num2);
// // // // // // // // // // // // // console.log(num1 <= num2);
// // // // // // // // // // // // // console.log(num1 >= num2);
// // // // // // // // // // // // // console.log(num1 == num2);  //it only check the values not the datatypes
// // // // // // // // // // // // // console.log(num1 === num2); //it check both values and the datatypes 

// // // // // // // // // // // // // console.log(num1 != num2); //it only check the values not the datatypes 
// // // // // // // // // // // // // console.log(num1 !== num2);

// // // // // // // // // // // // // // assignment operators 
// // // // // // // // // // // // // // = , += , -= , *= , /= , %= , **=
// // // // // // // // // // // // // let num3 = 10;
// // // // // // // // // // // // // let num4 = 20;
// // // // // // // // // // // // // console.log(num3);
// // // // // // // // // // // // // num3 += 10 // num3 = num3 +10;
// // // // // // // // // // // // // console.log(num3);
// // // // // // // // // // // // // num3 -= 10 // num3 = num3 - 10;
// // // // // // // // // // // // // console.log(num3);

// // // // // // // // // // // // // // logical operator 
// // // // // // // // // // // // // // && (And),||(Or) ,!(not)
// // // // // // // // // // // // // console.log(true && true);
// // // // // // // // // // // // // console.log(false && true);
// // // // // // // // // // // // // console.log(true && false);
// // // // // // // // // // // // // console.log(false && false);

// // // // // // // // // // // // // console.log(true && "helloworld");
// // // // // // // // // // // // // console.log(false && "helloworld");
// // // // // // // // // // // // // console.log(true || true);
// // // // // // // // // // // // // console.log(false || true);
// // // // // // // // // // // // // console.log(true || false);
// // // // // // // // // // // // // console.log(false || false);

// // // // // // // // // // // // // console.log(true || "helloworld");
// // // // // // // // // // // // // console.log(false || "helloworld");

// // // // // // // // // // // // // console.log(!true)//false
// // // // // // // // // // // // // console.log(!false)//true
// // // // // // // // // // // // // // increment and decrement
// // // // // // // // // // // // // // ++ , --
// // // // // // // // // // // // // let a = 10;
// // // // // // // // // // // // // // console.log(++a + a + a++);


// // // // // // // // // // // // // //pre increment / first increment then print/use ,
// // // // // // // // // // // // // //post increment /first print/use then increment
// // // // // // // // // // // // // // ++a;
// // // // // // // // // // // // // // console.log(a++)//10
// // // // // // // // // // // // // // console.log(a);

// // // // // // // // // // // // // // console.log(a++);
// // // // // // // // // // // // // // //pre decrement / first decrement then print/use ,//post decrement /first print/use then decrement
// // // // // // // // // // // // // // // --a;
// // // // // // // // // // // // // // console.log(a--)//10
// // // // // // // // // // // // // // console.log(++a);


// // // // // // // // // // // // // // ternary operator 
// // // // // // // // // // // // // // condition ? "true statement" :"false statement";
// // // // // // // // // // // // // console.log(false ? "hello" : "hi");


// // // // // // // // // // // // // // conditional statements 
// // // // // // // // // // // // // // if  ,ifelse , elseif ladder , nested if
// // // // // // // // // // // // // if (10 == '10') {
// // // // // // // // // // // // //     console.log("this is true")
// // // // // // // // // // // // // };

// // // // // // // // // // // // // // if else
// // // // // // // // // // // // // if (false) {
// // // // // // // // // // // // //     console.log("this is true")
// // // // // // // // // // // // // } else {
// // // // // // // // // // // // //     console.log("this is false")
// // // // // // // // // // // // // }


// // // // // // // // // // // // // // else if ladder

// // // // // // // // // // // // // if (false) {
// // // // // // // // // // // // //     console.log('this is first condition')
// // // // // // // // // // // // // } else if (false) {
// // // // // // // // // // // // //     console.log("this is second condition")
// // // // // // // // // // // // // } else if (true) {
// // // // // // // // // // // // //     console.log("this is third condition")
// // // // // // // // // // // // // } else {
// // // // // // // // // // // // //     console.log("no one is correct")
// // // // // // // // // // // // // }

// // // // // // // // // // // // // let age = 19;
// // // // // // // // // // // // // if (age >= 18) {
// // // // // // // // // // // // //     console.log("able to vote")
// // // // // // // // // // // // // } else {
// // // // // // // // // // // // //     console.log("not able to vote")
// // // // // // // // // // // // // };

// // // // // // // // // // // // // // task
// // // // // // // // // // // // // let count = 1;
// // // // // // // // // // // // // // check  this count is negative or positive;
// // // // // // // // // // // // // if (count < 0) {
// // // // // // // // // // // // //     console.log("number is negative")
// // // // // // // // // // // // // } else {
// // // // // // // // // // // // //     console.log("number is positive")
// // // // // // // // // // // // // }
// // // // // // // // // // // // // // 
// // // // // // // // // // // // // let p = -1;
// // // // // // // // // // // // // // 
// // // // // // // // // // // // // if (p > 0) {
// // // // // // // // // // // // //     console.log(p)
// // // // // // // // // // // // // } else {
// // // // // // // // // // // // //     console.log(-1 * p)
// // // // // // // // // // // // // }

// // // // // // // // // // // // // if (count < 0) {
// // // // // // // // // // // // //     console.log("number is negative")
// // // // // // // // // // // // // } else if (count == 0) {
// // // // // // // // // // // // //     console.log("equal to zero")
// // // // // // // // // // // // // }
// // // // // // // // // // // // // else {
// // // // // // // // // // // // //     console.log("number is positive")
// // // // // // // // // // // // // }

// // // // // // // // // // // // // // take three number and check which is greatest .

// // // // // // // // // // // // // // topics :- if-else , switch , string object ,  boolean,  Math , TypeConversion , corison,

// // // // // // // // // // // // // nested if . 
// // // // // // // // // // // // let condition = true;
// // // // // // // // // // // // if (condition) {
// // // // // // // // // // // //     if (true) {
// // // // // // // // // // // //         console.log("inner condition is true")
// // // // // // // // // // // //     } else {
// // // // // // // // // // // //         console.log("inner condition is false")
// // // // // // // // // // // //     }
// // // // // // // // // // // // } else {
// // // // // // // // // // // //     console.log("first condition is not true")
// // // // // // // // // // // // }

// // // // // // // // // // // // // let age = prompt("pls enter your age");
// // // // // // // // // // // // // // Number()
// // // // // // // // // // // // // console.log(Number(age));

// // // // // // // // // // // // // if (age >= 18) {
// // // // // // // // // // // // //     let nationality = prompt("enter your nationality")
// // // // // // // // // // // // //     if (nationality == "indian") {
// // // // // // // // // // // // //         console.log("able to vote")
// // // // // // // // // // // // //     } else {
// // // // // // // // // // // // //         console.log("not able to vote")
// // // // // // // // // // // // //     }
// // // // // // // // // // // // // } else {
// // // // // // // // // // // // //     console.log("age is below the min age")
// // // // // // // // // // // // // };

// // // // // // // // // // // // // "19"
// // // // // // // // // // // // // type convertion
// // // // // // // // // // // // console.log(Number("19"))//19
// // // // // // // // // // // // console.log(Number("sadvkjsdfv"))//NaN
// // // // // // // // // // // // // Boolean
// // // // // // // // // // // // console.log(Boolean("19"))//true
// // // // // // // // // // // // console.log(Boolean(19))//true
// // // // // // // // // // // // console.log(Boolean(0))//false
// // // // // // // // // // // // console.log(Boolean(""))// false
// // // // // // // // // // // // console.log(Boolean(" "));//true
// // // // // // // // // // // // console.log(Boolean(null)) // false
// // // // // // // // // // // // console.log(Boolean(undefined))//false

// // // // // // // // // // // // console.log(String(1888));
// // // // // // // // // // // // console.log(String(true));

// // // // // // // // // // // // // type coreison
// // // // // // // // // // // // console.log(10 + "15")
// // // // // // // // // // // // console.log(10 + 15)
// // // // // // // // // // // // console.log(10 - '15')
// // // // // // // // // // // // console.log('10' - 15)
// // // // // // // // // // // // console.log('ab' - 15);
// // // // // // // // // // // // console.log("ab" + "cd");

// // // // // // // // // // // // // string :- is a collection of charchters inside the inverted comma (single ,dobule , backticks);
// // // // // // // // // // // // let str = " javascript";//indexing start from 0  to 9 
// // // // // // // // // // // // // length 
// // // // // // // // // // // // console.log(str.length);
// // // // // // // // // // // // console.log(str.charAt(9))//finding the charchter on given index .
// // // // // // // // // // // // console.log(str.at(9));//same as charat 
// // // // // // // // // // // // console.log(str.charCodeAt(0));// find the assci code of the given index value form the string .
// // // // // // // // // // // // console.log(str.concat(" hello world"))
// // // // // // // // // // // // console.log(str + " hello world");
// // // // // // // // // // // // console.log(10 + 10 + '10')//2010
// // // // // // // // // // // // console.log(str.includes("java "));
// // // // // // // // // // // // console.log(str.indexOf("s"))
// // // // // // // // // // // // // //The substring to search for in the string    Returns the position of the first occurrence of a substring, or -1 if it is not present.
// // // // // // // // // // // // console.log(str.lastIndexOf("s"))
// // // // // // // // // // // // let user = "helloworld";
// // // // // // // // // // // // console.log(user.length);
// // // // // // // // // // // // console.log(user.trim());
// // // // // // // // // // // // console.log(user.trimStart());
// // // // // // // // // // // // console.log(user.trimEnd());
// // // // // // // // // // // // console.log(user.toUpperCase());
// // // // // // // // // // // // console.log(user.toLowerCase());
// // // // // // // // // // // // console.log(user.substring(0, 4))// it provide the string present on the given indexes, starting index , ending index + 1


// // // // // // // // // // // // // if ("") {
// // // // // // // // // // // // //     console.log('true')
// // // // // // // // // // // // // } else {
// // // // // // // // // // // // //     console.log("false")
// // // // // // // // // // // // // }


// // // // // // // // // // // // // Math Object
// // // // // // // // // // // // // 9.1 ,54 , 12,13,14 ,9
// // // // // // // // // // // // // console.log((Math.random() * 9999) + 1);
// // // // // // // // // // // // // console.log(Math.floor(55.6));
// // // // // // // // // // // // // console.log(Math.round(4.3));
// // // // // // // // // // // // // console.log(Math.trunc(4.9));
// // // // // // // // // // // // // console.log(Math.abs(99.3));
// // // // // // // // // // // // // console.log(Math.pow(9 , 9));
// // // // // // // // // // // // // console.log(Math.sqrt(144998));
// // // // // // // // // // // // // console.log(Math.min(10 ,44 ,23));
// // // // // // // // // // // // // console.log(Math.max(10,44,55,88));



// // // // // // // // // // // // 1. Positive, Negative, or Zero: Take a number as input and print whether it is positive, negative,
// // // // // // // // // // // // or zero.
// // // // // // // // // // // // 2. Even or Odd: Check whether a given integer is even or odd.
// // // // // // // // // // // // 3. Voting Eligibility: Take a person's age as input. Print "Eligible to vote" if the age is 18 or
// // // // // // // // // // // // above, otherwise print "Not eligible."
// // // // // // // // // // // // 4. Largest of Two Numbers: Take two numbers and print the larger one. Handle the case
// // // // // // // // // // // // where both are equal.
// // // // // // // // // // // // 5. Pass or Fail: Take a student's marks (0-100). Print "Pass" if marks are 40 or above, otherwise
// // // // // // // // // // // // "Fail."
// // // // // // // // // // // // 6. Largest of Three Numbers: Take three numbers and find the largest one using if-else (or
// // // // // // // // // // // // 7. Leap Year Checker: Check whether a given year is a leap year. (Divisible by 4, but century
// // // // // // // // // // // // years must be divisible by 400.)
// // // // // // // // // // // // 8. Grade Calculator: Take marks as input and print the grade:
// // // // // // // // // // // // • 90-100: A , • 80-89: B , • 70-79: C , • 60-69: D
// // // // // // // // // // // // • Below 60: F
// // // // // // // // // // // // 9. Triangle Type: Take three side lengths and determine whether the triangle is equilateral,
// // // // // // // // // // // // isosceles, or scalene. Also check whether the sides can form a valid triangle first.
// // // // // // // // // // // // 10. Character Type: Take a single character and print whether it is a vowel, consonant, digit, or
// // // // // // // // // // // // special character.

// // // // // // // // // // // // // 14 oct :- for, while, do-while, Nested Loops
// // // // // // // // // // // for (let i = 10; i >= 1; i--) {
// // // // // // // // // // //     console.log("hello world", i);
// // // // // // // // // // //     document.write("hello world<br>");
// // // // // // // // // // // }

// // // // // // // // // // // for (let j = 1; j <= 1; j++) {
// // // // // // // // // // //     console.log(j)
// // // // // // // // // // // }

// // // // // // // // // // // for (let j = 10; j <= 1; j--) {
// // // // // // // // // // //     console.log(j)
// // // // // // // // // // // }

// // // // // // // // // // // // 1-10
// // // // // // // // // // // //10-1


// // // // // // // // // // // for (let j = 10; j <= 10; j++) {
// // // // // // // // // // //     console.log(j)
// // // // // // // // // // // }
// // // // // // // // // // // //print the sum of 1 to 100 number
// // // // // // // // // // // let sum = 0;
// // // // // // // // // // // for (let k = 1; k <= 100; k++) {
// // // // // // // // // // //     sum += k;
// // // // // // // // // // // }
// // // // // // // // // // // console.log(sum)

// // // // // // // // // // // // find the factorial of 8;
// // // // // // // // // // // let f = 8
// // // // // // // // // // // let fac = 1;
// // // // // // // // // // // for (let k = 1; k <= f; k++) {
// // // // // // // // // // //     fac *= k;
// // // // // // // // // // // }
// // // // // // // // // // // console.log(fac);

// // // // // // // // // // // //find all the even numbers btw 1 to 100
// // // // // // // // // // // for (let i = 0; i <= 100; i++) {
// // // // // // // // // // //     if (i % 2 == 0) {
// // // // // // // // // // //         console.log(i, " is even number")
// // // // // // // // // // //     }
// // // // // // // // // // // }
// // // // // // // // // // // //for, while, do-while, Nested Loops
// // // // // // // // // // // // Function Declaration, Expression, Arrow Functions, Scope
// // // // // // // // // // // // 
// // // // // // // // // // // let num1 = 9;
// // // // // // // // // // // let result;
// // // // // // // // // // // for (let i = 2; i < num1; i++) {
// // // // // // // // // // //     if (num1 % i == 0) {
// // // // // // // // // // //         result = "not prime";
// // // // // // // // // // //         break;
// // // // // // // // // // //     } else {
// // // // // // // // // // //         result = "prime";
// // // // // // // // // // //     }
// // // // // // // // // // // }
// // // // // // // // // // // console.log(result);

// // // // // // // // // // // // nested loop 
// // // // // // // // // // // // for (let i = 1; i <= 5; i++) {
// // // // // // // // // // // //     for (let j = 1; j <= 5; j++) {
// // // // // // // // // // // //         console.log(j, i)
// // // // // // // // // // // //     }
// // // // // // // // // // // // }
// // // // // // // // // // let sum = 0;
// // // // // // // // // // for (let i = 1; i <= 100; i++) {
// // // // // // // // // //     let result;
// // // // // // // // // //     if (i == 1 || i == 2) {
// // // // // // // // // //         result = "prime"
// // // // // // // // // //     }
// // // // // // // // // //     for (let k = 2; k < i; k++) {
// // // // // // // // // //         if (i % k == 0) {
// // // // // // // // // //             result = "not prime";
// // // // // // // // // //             break;
// // // // // // // // // //         } else {
// // // // // // // // // //             result = "prime"
// // // // // // // // // //         }
// // // // // // // // // //     }

// // // // // // // // // //     if (result == "prime") {
// // // // // // // // // //         sum += i
// // // // // // // // // //         console.log(i, "is prime numeber")
// // // // // // // // // //     }
// // // // // // // // // // }

// // // // // // // // // // console.log(sum);

// // // // // // // // // // // star patterns

// // // // // // // // // // //12345
// // // // // // // // // // //1234
// // // // // // // // // // //123
// // // // // // // // // // //12
// // // // // // // // // // //1
// // // // // // // // // // // for (let i = 5; i >= 1; i--) {
// // // // // // // // // // //     for (let j = 1; j <= i; j++) {
// // // // // // // // // // //         document.write(j);
// // // // // // // // // // //     }
// // // // // // // // // // //     document.write("<br>")
// // // // // // // // // // // }

// // // // // // // // // // // 54321
// // // // // // // // // // // 4321
// // // // // // // // // // // 321
// // // // // // // // // // // 21
// // // // // // // // // // // 1
// // // // // // // // // // for (let i = 5; i >= 1; i--) {
// // // // // // // // // //     for (let j = i; j >= 1; j--) {
// // // // // // // // // //         document.write(j);
// // // // // // // // // //     }
// // // // // // // // // //     document.write("<br>")
// // // // // // // // // // }

// // // // // // // // // // // *****
// // // // // // // // // // //  ****
// // // // // // // // // // //   ***
// // // // // // // // // // //    **
// // // // // // // // // // //     *
// // // // // // // // // // for (let i = 5; i >= 1; i--) {
// // // // // // // // // //     let output = ""
// // // // // // // // // //     for (let j = 5; j >= 1; j--) {
// // // // // // // // // //         if (j > i) {
// // // // // // // // // //             document.write("&nbsp;&nbsp;");
// // // // // // // // // //             output += " "
// // // // // // // // // //         } else {
// // // // // // // // // //             output += "*"
// // // // // // // // // //             document.write("*");
// // // // // // // // // //         }
// // // // // // // // // //     }
// // // // // // // // // //     console.log(output)
// // // // // // // // // //     document.write("<br>")
// // // // // // // // // // }

// // // // // // // // // // // **********
// // // // // // // // // // // *        *
// // // // // // // // // // // *        *
// // // // // // // // // // // *        *
// // // // // // // // // // // *        *
// // // // // // // // // // // *        *
// // // // // // // // // // // *        *
// // // // // // // // // // // **********

// // // // // // // // // // for (let i = 1; i <= 10; i++) {
// // // // // // // // // //     for (let j = 1; j <= 10; j++) {
// // // // // // // // // //         document.write("(", i, ",", j, ")");
// // // // // // // // // //     }
// // // // // // // // // //     document.write("<br>");
// // // // // // // // // // }
// // // // // // // // // // for (let i = 1; i <= 10; i++) {
// // // // // // // // // //     for (let j = 1; j <= 10; j++) {
// // // // // // // // // //         if (i + j == 11 || j == i) {
// // // // // // // // // //             document.write(" *");
// // // // // // // // // //         } else {
// // // // // // // // // //             document.write("&nbsp;&nbsp;&nbsp;");
// // // // // // // // // //         }
// // // // // // // // // //     }
// // // // // // // // // //     document.write("<br>");
// // // // // // // // // // }

// // // // // // // // // // // while loop 

// // // // // // // // // // let i = -10;
// // // // // // // // // // while (i <= 10) {
// // // // // // // // // //     console.log(i);
// // // // // // // // // //     i++;
// // // // // // // // // // }

// // // // // // // // // // let j = 10;
// // // // // // // // // // while (j) {
// // // // // // // // // //     console.log(j);
// // // // // // // // // //     j--
// // // // // // // // // // }
// // // // // // // // // // //count the digit 
// // // // // // // // // // let num = 87878787
// // // // // // // // // // let count = 0;
// // // // // // // // // // while (num) {
// // // // // // // // // //     let temp = num / 10;
// // // // // // // // // //     console.log(temp)
// // // // // // // // // //     num = Math.floor(temp)
// // // // // // // // // //     count++
// // // // // // // // // // }
// // // // // // // // // // console.log(count)
// // // // // // // // // // //take any number and check it is palindrome or not 
// // // // // // // // // // // also check it is armstrong or not 

// // // // // // // // // // // do while  //always run atleast one time
// // // // // // // // // // //
// // // // // // // // // // let k = 1
// // // // // // // // // // do {
// // // // // // // // // //     console.log("hello");
// // // // // // // // // //     k++
// // // // // // // // // // } while (k == 10);


// // // // // // // // // // // function :- is block of code used to run a specific task , one time  or multiple times as per need. it execute only when we call it using its name with parenthesis.
// // // // // // // // // // function fun(parameters){
// // // // // // // // // //     console.log("code")
// // // // // // // // // // }

// // // // // // // // // // fun(arguments);

// // // // // // // // // // //Function Declaration, Expression, Arrow Functions, Scope
// // // // // // // // // // // Closures, IIFE, Hoisting, Strict Mode Lab: Array Methods (Task 6)

// // // // // // // // // //function declaration

// // // // // // // // // function sum(a, b, c) {//parameters
// // // // // // // // //     console.log("hello world", a + b + c);
// // // // // // // // // }
// // // // // // // // // sum(1, 2, 3);///arguments
// // // // // // // // // sum(55, 77, 33);///arguments

// // // // // // // // // //parameters :- names of the recivied values

// // // // // // // // // //arguments :- the value which we  provided in the function parenthisis when call it.
// // // // // // // // // console.log(add(9, 9))

// // // // // // // // // function add(a, b) {
// // // // // // // // //     return a + b
// // // // // // // // // }
// // // // // // // // // // add(2, 4);
// // // // // // // // // // let output = add(55, 66);
// // // // // // // // // // document.write(output);

// // // // // // // // // // hoisting is also work with function
// // // // // // // // // // hoisting :- is used to move the declration to top of the file with code also .

// // // // // // // // // // function expression :- a function which is stored in a variable .
// // // // // // // // // let fun = function main() {
// // // // // // // // //     console.log("fun function")
// // // // // // // // // }
// // // // // // // // // fun();
// // // // // // // // // // main();

// // // // // // // // // //anonymous function :- a function without name ;
// // // // // // // // // let newfun = function () {
// // // // // // // // //     console.log("this is anonymous function")
// // // // // // // // // }
// // // // // // // // // let obj = {
// // // // // // // // //     main: function () {
// // // // // // // // //         console.log("main func")
// // // // // // // // //     }
// // // // // // // // // }


// // // // // // // // // // find prime number using function ;

// // // // // // // // function findprime(num) {
// // // // // // // //     let result;
// // // // // // // //     for (let i = 2; i < num; i++) {
// // // // // // // //         if (num % i == 0) {
// // // // // // // //             result = "notprime";
// // // // // // // //             break;
// // // // // // // //         } else {
// // // // // // // //             result = "prime"
// // // // // // // //         }
// // // // // // // //     }
// // // // // // // //     if (result == "prime") {
// // // // // // // //         return true
// // // // // // // //     } else {
// // // // // // // //         return false;
// // // // // // // //     }
// // // // // // // // }
// // // // // // // // console.log(findprime(9));

// // // // // // // // // for (let i = 1; i <= 100; i++) {
// // // // // // // // //     if (findprime(i)) {
// // // // // // // // //         console.log(i);
// // // // // // // // //     }
// // // // // // // // // }

// // // // // // // // // // callback function:a function which is call after the main function execution is complete and it is passed as a argument in the main function .

// // // // // // // // // function main(fn) {
// // // // // // // // //     console.log("main function start")
// // // // // // // // //     for (let i = 0; i <= 1991120000; i++) {
// // // // // // // // //         let k = 0;
// // // // // // // // //         k++;
// // // // // // // // //     }
// // // // // // // // //     console.log("main function")
// // // // // // // // //     console.log("main end");
// // // // // // // // //     fn();
// // // // // // // // // }
// // // // // // // // // function another() {
// // // // // // // // //     console.log("this is used as a callback func")
// // // // // // // // // }
// // // // // // // // // main(another);

// // // // // // // // // IIFE :- Immediately Invoked Function Expression 
// // // // // // // // (function () {
// // // // // // // //     console.log("this is IIFE function");
// // // // // // // // })();

// // // // // // // // // ()()

// // // // // // // // // arrow function :- it have a minimal sytanx and we can declare function without using function keyword.
// // // // // // // // // this syntax is added in 2015 in ES6 update of javascript.arrow function doesn't have its own this and also the arguments

// // // // // // // // function fun() {
// // // // // // // //     console.log(arguments);
// // // // // // // // }
// // // // // // // // fun(2, 3, 4, 4);

// // // // // // // // let arrow = (a, b) => {
// // // // // // // //     console.log('this is arrow function', a, b)
// // // // // // // //     // console.log(arguments)//this keyword is not used in arrow function
// // // // // // // // }
// // // // // // // // // console.log(this)
// // // // // // // // arrow(2, 3);

// // // // // // // // let newfunction = (a, b) => a + b;//it automatically return the values when we donot use any curlybrackets and return keyword.
// // // // // // // // console.log(newfunction(9, 9));

// // // // // // // closure function :- closure function hava access of the parent function after then execution of parent function is finished.
// // // // // // function main() {
// // // // // //     let count = 0;
// // // // // //     return function () {
// // // // // //         count++;
// // // // // //         console.log(count);
// // // // // //         return count ;
// // // // // //     }
// // // // // // }
// // // // // // let output = main();
// // // // // // console.log(output)
// // // // // // output();
// // // // // // output();
// // // // // // // // output();
// // // // // // // // output();
// // // // // // console.log("count", output())

// // // // // // // Lexical scope is a fundamental concept in programming that determines the accessibility of variables and functions based on where they are defined in the source code. In simple terms, lexical scope is the scope of a variable or function determined at compile time by its physical location in the code. Unlike dynamic scope, which depends on how functions are called at runtime, lexical scope is static and remains the same throughout the program's execution.


// // // // // // // HOF = higher order function ;

// // // // // // // // function HOF(a, b, name) {
// // // // // // // //     return name(a, b);
// // // // // // // // }
// // // // // // // // function add(a, b) {
// // // // // // // //     return a + b;
// // // // // // // // }
// // // // // // // // function multi(a, b) {
// // // // // // // //     return a * b;
// // // // // // // // }

// // // // // // // // console.log(HOF(4, 5, add))
// // // // // // // // console.log(HOF(3, 5, multi))

// // // // // // // // Array and its Methods
// // // // // // // let ar = [1, 2, 3, 4, 5];
// // // // // // // let names = ["raj", "raman", "aman"];
// // // // // // // let details = [{ name: "Raj" }, { name: "raman" }];

// // // // // // // // 
// // // // // // // console.log(ar);
// // // // // // // document.write(ar);
// // // // // // // // console.log(ar[-1])//it gives us undefined when we give -1 and more than the last index.
// // // // // // // console.log(ar[0]);

// // // // // // // console.log(ar.length)//

// // // // // // // for (let i = 0; i < names.length; i++) {
// // // // // // //     console.log(names[i])
// // // // // // // }

// // // // // // // // for in loop ,
// // // // // // // for (let i in ar) {
// // // // // // //     console.log(i, ar[i]);
// // // // // // // }
// // // // // // // // for of loop 
// // // // // // // for (let i of ar) {
// // // // // // //     console.log(i);
// // // // // // // }

// // // // // // // array methods;
// // // // // // let ar = [1, 2, 3, 4, 5, 6, 7];
// // // // // // console.log(ar.at(0));
// // // // // // // console.log(ar.concat(names, details));
// // // // // // // console.log(ar.copyWithin(2, 0, 2))// permanent changes in the given array.
// // // // // // // taget(how many times we want to copy) ,  start ,end 
// // // // // // console.log(ar.indexOf(4))//-1 if not available , and index of the element when it is present.
// // // // // // console.log(ar.includes(3))// true  , false
// // // // // // console.log(ar.reverse());

// // // // // // // reverse the array without using reverse method 
// // // // // // let p = [1, 2, 3, 4, 4, 5];
// // // // // // p[10] = 99;
// // // // // // console.log(p)
// // // // // // let rev = [];
// // // // // // for (let i = p.length - 1; i >= 0; i--) {
// // // // // //     rev[p.length - 1 - i] = p[i]
// // // // // // }
// // // // // // console.log(p, rev);
// // // // // // // A higher order function is a function that takes one or more functions as arguments, or returns a function as its result

// // // // // // // function multiplier(factor) {
// // // // // // //   return function (number) {
// // // // // // //     return number * factor;
// // // // // // //   };
// // // // // // // }

// // // // // // // const double = multiplier(2);
// // // // // // // const triple = multiplier(3);

// // // // // // // console.log(double(5)); // 10
// // // // // // // console.log(triple(5)); // 15
// // // // // // // at ,length ,
// // // // // // // //reverse ,
// // // // // // // delete 
// // // // // // let a  =[1,2,3,4,5];
// // // // // // console.log(a)
// // // // // // delete a[0];//replace this element with empty
// // // // // // delete a[2];//replace this element with empty
// // // // // // console.log(a);

// // // // // // // sort :- sort the array element (charchters are sort easily but numbers cannot be sort by it directly we have to use the callback function for that);
// // // // // let data = ["raj", "aman", "harry", "elon"];
// // // // // console.log(data)
// // // // // console.log(data.sort());

// // // // // let array = [3, 5, 74, 6, 43, 6, 34, 1, 1111];
// // // // // console.log(array);
// // // // // // console.log(array.sort());//it will not sort it properly
// // // // // console.log(array.sort((a, b) => {
// // // // //     return b - a;
// // // // // }))

// // // // // // Q: sort the array without using sort method ;

// // // // // // a- b for accending we want negative output
// // // // // // b -a for deccending we want  positive output;
// // // // // //for accending order, a=5(second value) ,b = 3(first value), 
// // // // // //if it give positive output then it will not swap ,but if it will negative output it will swap automatically

// // // // // let ar = [33, 44, 563, 2, 6, 2, 3];
// // // // // // accending
// // // // // console.log(ar)
// // // // // for (let i = 0; i < ar.length; i++) {
// // // // //     for (let j = i + 1; j < ar.length; j++) {
// // // // //         if (ar[i] > ar[j]) {
// // // // //             let temp = ar[i];
// // // // //             ar[i] = ar[j];
// // // // //             ar[j] = temp;
// // // // //             // console.log(ar);
// // // // //         }
// // // // //     }
// // // // // }
// // // // // console.log(ar)
// // // // // // push:(used to insert elements from the last index of the array,we can add multiple elements at once), pop(used to delete elements from the last index, it only delete one element at a time.) 
// // // // // ar.push(100, 44, 99);
// // // // // console.log(ar);

// // // // // // pop
// // // // // console.log(ar.pop())
// // // // // console.log(ar);

// // // // // // shift(it remove elements from starting index ,one at a time) , unshift (it add elements form the starting index , add multiple elements at a time.)
// // // // // console.log(ar);
// // // // // ar.unshift(22, 33, 44);
// // // // // console.log(ar);
// // // // // console.log(ar.shift());
// // // // // console.log(ar);

// // // // // // find ,filter ,slice , splice, map ,reduce, join, 
// // // // // // find :- used to find any perticular element ,which is match our given condition
// // // // // console.log(ar.find((a) => {
// // // // //     return a % 2 == 0
// // // // // }))
// // // // // console.log(ar.filter((a) => {
// // // // //     return a % 2 == 0
// // // // // }))
// // // // // console.log(ar.filter((a, index) => {
// // // // //     return index == 5
// // // // // }));

// // // // // // slice (to copy an array ,using starting and ending index) , splice 

// // // // // ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // // // // let newar = ar.slice(3, 6)
// // // // // console.log(newar)//copy of the array from 3 to 5 index

// // // // // // splice (this method used to add elements, remove elements , replace elements) at any index of the array ,
// // // // // // splice(startingindex , deletecount , insertvalues)
// // // // // // add 2 elements at starting index
// // // // // ar.splice(0, 0, 78, 89);
// // // // // console.log(ar)
// // // // // // add 2 elements at end index
// // // // // ar.splice(ar.length, 0, 78, 89);
// // // // // console.log(ar)
// // // // // // add 2 elements at random index
// // // // // ar.splice(3, 0, 78, 89);
// // // // // console.log(ar)

// // // // // // delete element
// // // // // ar.splice(0, 1);//it will delete the element present at 0 index,
// // // // // ar.splice(0, 5);//it will delete the element present at 0 index and next 4 elements also,
// // // // // console.log(ar)


// // // // // // replace elements
// // // // // ar.splice(3, 1, 88)//it will delete the element present at 3 index and insert 88 .
// // // // // console.log(ar)

// // // // // // map ,reduce
// // // // // ar.map((value, index) => {
// // // // //     if (value % 2 == 0) {
// // // // //         console.log("even", value)
// // // // //     }
// // // // // })
// // // // // console.log(ar.map((value, index) => {
// // // // //     return value * 8
// // // // // }))

// // // // // ar.map((value,index)=>{
// // // // //     document.write(`<h1>values :${value} </h1>`)
// // // // // });

// // // // // // reduce method ,used to reduce the array into single value .
// // // // // console.log(ar )
// // // // // console.log(ar.reduce((acc,curr)=>{
// // // // //     console.log(acc ,curr)
// // // // //     return acc + curr 
// // // // // }))
// // // // // console.log(ar.reduce((acc,curr)=>{
// // // // //     console.log(acc ,curr)
// // // // //     return acc * curr 
// // // // // }))

// // // // // // join//it will join the array elements by using the given value.
// // // // // console.log(ar.join("-"));

// // // // // // task  
// // // // // // find all the   prime numbers from the array ?
// // // let a = [1, 2, 3, 34, 54, 56, 6, 6,];
// // // function findprime(num) {
// // //     let result;
// // //     if (num > 0 && num <= 2) {
// // //         return true;
// // //     }
// // //     for (let i = 2; i < num; i++) {
// // //         if (num % i == 0) {
// // //             result = "notprime";
// // //             break;
// // //         } else {
// // //             result = "prime"
// // //         }
// // //     }
// // //     if (result == "prime") {
// // //         return true
// // //     }
// // //     return false;
// // // }
// // // let allprime = [];
// // // for (let i of a) {
// // //     if (findprime(i)) {
// // //         allprime.push(i)
// // //     }
// // // }
// // // console.log(allprime);

// // // // // // find the largest number from the array
// // // // // // find the second largest element from the array
// // // // // // find the length of the array without using length method

// // // // Object :- it store data in key value pair inside curly brackets, 
// // // let obj = { name: "raj", age: 20, age: 40, marks: [22, 45, 67] };

// // // console.log(obj);
// // // document.write(obj, "<br>");

// // // document.write("name : ", obj.name + "<br>")
// // // document.write("age : ", obj.age + "<br>")

// // // obj.age = 90;;
// // // obj.address = "UP";
// // // console.log(obj);

// // // let course = "BTECH";
// // // let newkey = "salary";
// // // let newobj = {    name: "naman",    age: 30,    course,    [newkey]: 900000,
// // //     fun: function main() { console.log("fun function") },
// // //     run() { console.log("run function") },
// // // }
// // // console.log(newobj);
// // // newobj.fun();
// // // newobj.run();

// // // //for in loop,the variable here get the keys of the object.
// // // for(let i in newobj){
// // //     console.log(i ," : ", newobj[i])
// // //     document.write(i ," : ", newobj[i], "<br>")
// // // } 

// // // // object destructuring 
// // // let data = {name:"raj", address:"UP", salary:1000 };
// // // // let name = data.name ;//old way of destructuring
// // // // let address= data.address ;//old way of destructuring

// // // // Object destructuring
// // // // let {name ,salary ,address } = data ; 
// // // // console.log(name  ,salary ,address)
// // // let {name:username ,salary:amount ,address:city} = data ; 
// // // console.log(username   ,amount  ,city )

// // // let users =[ "ram","shyam",'raman', "naman"];
// // // // let x = users[0] // old way of array destructring
// // // // let b = users[1] // old way of array destructring
// // // // let c = users[2] // old way of array destructring
// // // // let d = users[3] // old way of array destructring

// // // // let [] =  [ ]
// // // let [p,q,r,s] =  users ;
// // // console.log(p ,q ,r,s );

// // // // Object methods
// // // // Object 
// // // // keys :-it find all the keys of the object and print into an array
// // // console.log(Object.keys(data));

// // // // entries
// // // console.log(Object.entries(data));

// // // //hasOwn : it find the key in the given object and return boolean value
// // // console.log(Object.hasOwn(data,"salary"))
// // // // freeze: it freeze the object ,we cannot update and add any new key in the object
// // let data = { name: "raj", age: 10 };
// // Object.freeze(data);
// // data.salary = 3000;
// // data.age = 5000;
// // console.log(data);
// // // isFrozen
// // console.log(Object.isFrozen(data));

// // // seal:-it seal the object , we can update any key ,but cannot add new key in the object.
// // Object.seal(data);
// // data.name = "elon";
// // data.salary = 333000
// // console.log(data, Object.isSealed(data))

// // // hasOwn :- it check the given key is avialable in the object or not
// // console.log(Object.hasOwn(data, "price"))

// // //other methods :- call ,apply ,bind (constructor);

// // // error and  types of error in js ,error handling
// // // refrenceError :- when the element is not defined in the given refrence.when variable is not defined but we use it .
// // // syntaxError :- when we write the wrong syntax,ex:- start any variable name with numerical value. 
// // //typeError :- when mistakenly use any wrong type ,ex:- call a variable with number value  as a function.

// // // // console.log(a);//it give refrence error
// // // let a = 10;
// // // a();//it given type error 
// // // // let a = 10; // it give  syntax error
// // // console.log(a);

// // // console.log("last line ");

// // // try catch error handler 
// // try {
// //     let a = 10;
// //     a();
// // } catch (error) {
// //     console.log("error of this code :- ", error);
// //     console.log("error of this code :- ", error.message);
// // } finally {
// //     console.log("all done");
// // }
// // console.log("last line");

// // // intentionaly throw any error
// // // let task = false;
// // // if (!task) {
// // //     throw new Error("this is an error");
// // // }
// // //debugging 

// // for (let i = 1; i <= 5; i++) {
// //     //  debugger;
// //     console.log(i)
// // }

// // // DOM:- Document Object Model
// // // DOM  is used to Update the HTML and work with the nodes,elements of the html.
// // // document is a collection of all the elements(root element)
// // console.log(document)
// // console.log(document.head)
// // console.log(document.body)
// // console.log(document.URL)
// // console.log(document.domain)//it print local url
// // console.log(document.children)












// // // Objects, Forms, Errors, Debugging
// // // DOM Tree, Selecting Elements, Modifying Elements
// // // Mouse Events, Keyboard Events, Form Events
// // // const ul = document.querySelector("ul");

// // // ul.parentElement;          // body
// // // ul.children;               // HTMLCollection of <li> elements
// // // ul.firstElementChild;      // first <li>
// // // ul.lastElementChild;       // last <li>
// // // ul.firstElementChild.nextElementSibling;      // second <li>
// // // ul.lastElementChild.previousElementSibling;   // first <li>

// // document.js 
// // document.html 

// //targeting methods
// // getElementById :- used to find element by ID

// // let para = document.getElementById("para1");//it target one element at a time
// //         console.log(para)
// //         let parabyclass = document.getElementsByClassName("paraclass");
// //         console.log(parabyclass);//return array
// //         console.log(parabyclass[1]);
// //         let parabytag = document.getElementsByTagName("p");
// //         console.log(parabytag);//return array
// //         let tagbyname = document.getElementsByName("password");
// //         console.log(tagbyname)//return array

// // querySelector
// // querySelectorAll

// // let target = document.querySelector("p");//it will target the first p tag
// // let target = document.querySelector("#para3");
// // let target = document.querySelector(".paraclass");
// // let target = document.querySelector("div p");
// // console.log(target);


// // let target = document.querySelectorAll(".paraclass");
// // let target = document.querySelectorAll("#para1");
// // console.log(target);
// // let target = document.querySelector("div");
// // //  innerText , innerHTML
// // console.log(target.innerText);
// // console.log(target.innerHTML);
// // // target.innerText = "<p>newdata</p>";
// // target.innerHTML = "<p>newdata</p>";

// let elem = document.querySelector("p");
// console.log(elem);
// // // textContent ,innerText  , innerHTML :- to update the content and html
// // elem.textContent = "new text ";
// // elem.innerText = "<b>new text</b> ";
// // elem.innerHTML = "<b>new text</b> ";
// // console.log(elem);
// // to update the attributes :- setAttribute ,getAttribute, removeAttribute ,hasAttribute
// console.log(elem.getAttribute("class"))
// console.log(elem.getAttribute("style"));

// elem.setAttribute("class", "newclass");
// elem.setAttribute("style", "background-color:blue;color:white;");

// elem.removeAttribute("id");
// console.log(elem);

// console.log(elem.hasAttribute("id"));

// console.log(elem.attributes);

// // className, classList :- used to update class attribute and get the value of class
// console.log(elem.className); // print the classname
// elem.className = "thirdclass"; //it replace the classname
// // classList  to add new classnames and remove classnames.
// elem.classList.add("abc", "xyz");
// elem.classList.remove("thirdclass");  //it remove this classname
// console.log(elem.classList); //it print the names of classes avialable in the class attribute .
// elem.classList.toggle("pqr"); //it add the classname if not present and delete if present
// console.log(elem.className);
// console.log(elem.classList.contains("abc"));//it print true when the classname is avialable ,and false if not


// // style :-  used to update css of any elements
// elem.style.border = "1px solid black";
// elem.style.width = "fit-content";
// elem.style.borderRadius = "20px";
// elem.style.padding = "5px 10px";


// // children selection of any element;
// let ul = document.querySelector("ul");
// console.log(ul.children);
// for (let child of ul.children) {
//     child.textContent = "new " + child.textContent;
// }
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
// console.log(ul.firstElementChild.nextElementSibling);
// console.log(ul.lastElementChild.previousElementSibling);
// ul.firstElementChild.style.color = "blue";
// ul.lastElementChild.style.color = "red";

// //createElement :used to create new element from js

let button = document.createElement("button");
button.textContent = "login";
button.style.padding = "5px 10px";

button.setAttribute("id", "btn");
// append ,prepend, before,after
// let div = document.querySelector(".paraclass");
// div.append(button); 
// div.prepend(button);
// div.before(button);
// div.after(button);


function insertbox() {
    let div = document.createElement("div");
    div.innerHTML = "<h1> hello world </h1> <button> Login </button>";
    div.classList.add("box");
    div.style.background = "aqua"
    div.setAttribute("id", "boxid");
    div.firstElementChild.style.color = "red";
    let body = document.querySelector("body");
    body.prepend(div);
}

//mouse events:- 
// onclick , ondblclick , oncontextmenu(right click) , 
// onmouseover , onmouseleave , onmouseenter , onmouseout
function eventtrigger(a) {
    console.log(a, "event fired")
}



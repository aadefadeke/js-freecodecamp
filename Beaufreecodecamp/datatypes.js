// Data types : booleans,
// using = is for assignment and === is for comparision purposes
var data = "false";
if (data === true) {
  console.log("You aren't from Ijelsu");
} else {
  console.log("You might be from Ijelsu if it were a real place");
}

//null : variable hasn't been declared or it hasnt been declared a value
var n = null;
console.log(n * 8);

//Undefined :
var a = 0;
console.log(a + 4);

// Number : digits basically, there's a modulus that gives the remainder of the digit
// to add 1 to a number add ++ at the end or -- to decrease 1 , +=5 : this means the number before added to 5,
//other terms can be used too like using *=5.
var number = 4.5;
console.log(4.5 + 5);

var number2 = 12 - 4;
console.log(number2);

//string : single/double characters enclosed in single or double quotes "" or ''
var myName = " aadefadeke";
console.log("Welcome" + myName);

var fullname = " Adesoye " + " Ziyann";
var sentence = "Your name is" + fullname;
console.log(sentence);

var myName2 = " Ziyan";
console.log("Welcome that aint your name, your name aint" + myName2);

var state = " Taraba";
console.log("Are you sure you are from" + " Taraba");

//Object
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "GLE";
console.log(myCar.make);
console.log(myCar.model);

// hoisting : calling your variable before calling it
console.log(undefined);
var undefined = "i am actually defined though";

// do something else : i don't understant this tbh sha
function dosomethingelse() {
  console.log("i did it bruv!");
}

// Comparison If/Else if and the likes .......
var Icecream = " true";
if (Icecream) {
  console.log(" it works i guess");
} else {
  console.log("I guess this is Icecream");
}

//comparison opperators : less than<, greater than>, equals equals ==, not equal !=
var age = 18;
if (age >= 18) {
  console.log("You are an adult");
} else if (age < 18) {
  console.log("You are a minor");
}

if (age == 18) {
  console.log("Nigga, you 18, goddamn, you do drugs or something ?");
}

// js nuggets : difference between == & ===
// == : Abstract equality : the abstract equality doesn't differenciate between the both of them being a number and a string
// === : Strict equality : the stict equality differenciates between the data types as one is a number while one is a string
console.log(4=="4");
console.log (4 ==="4");

//Null & Undefined 
var Apple;
console.log (Apple);
Apple = null;
console.log (Apple);

console.log (null == undefined);
console.log (null === undefined);
console.log (null != undefined);
console.log (typeof null)

// And : &&  ,  Or : ||


//Ternary Operator
// condition expr1? : expr2?
var age = 18;
if (age >=18){ console.log (" She's not a minor")}
else { console.log ("she is a minor ooooooooooooooo")}
//easier way to write such
console.log ((age>=19)? "You are an adult" : "You are a kid");
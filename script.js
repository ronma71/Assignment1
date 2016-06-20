// Step 1 - Camel case notation
var someMonth;
function theMonth   // function to return current month
currentMonth        // a constant
var summerMonth;    // an array of summer months
myLibrary-aFunction // a function
// Step 1 Done

// Step 2 - Expression examples
2.8                 // numeric literal expression
"Zoiks!"            // string literal expression
true                // boolean literal expression
null                // null literal expression
// Step 2 Done

// Step 3 - 2 examples of complex/variable expressions
var firstExample = 8 * (6/8) + 12;  // example 1

var firstName = "joe";              // example 2
var lastName = "smith";
alert(firstName + ' ' + lastName);
// Step 3 Done

// Step 4 - Declare identifiers
var firstName
var lastName
var myAddress
var myCity
var myState
var myZip
var myAge
var referralSource
var contactMe
// Step 4 Done

// Step 5 - Declare and assign values
var firstName = "Joe";
var lastName = "Schmoe";
alert(firstName + ' ' + lastName); // method 1

var myAddress = "1234 My Street";
var myAge = "40";
console.log("My address is " + myAddress + ", and I am " + myAge + " years old.");  // method 2

var myCity = "San Diego";
var myZip = "92123";
console.log("The city I live in is " + myCity + ", and my zip code is " + myZip + ".");  // method 3
// Step 5 Done

//Step 6 - Variables
var numOfVisits = 3;
var messageView = "<p>You went to the bathroom " + numOfVisits + " times today.</p>";
console.log(messageView); // number & string

var numCandy = "20";
var numChocolate = "20";
console.log(+numCandy == +numChocolate); // boolean & string

var x = 45;
var y = 45;
console.log(x == y); //number & boolean
// Step 6 Done

// Step 7 - Hoisting
var x = 1; // initialize x
var y; // declare y

elem = document.getElementById("demo"); // find an element
elem.innerHTML = x + " " + y; // display x and y

y = 5; // assign 7 to y 
// Step 7 Done

// Step 8 - Is this string valid? If not, fix it
var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."';
console.log(someString); //not valid

var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
console.log(someString); // valid
// Step 8 Done

// Step 9
var x = 10;
var y = null;
x = null;
console.log(x);
console.log(y); // null value

var x;
console.log(x); // undefined value
// Step 9 Done

// Step 10 - typeof operator
typeof "Bill"       // returns string
typeof 2.68         // returns number
typeof true         // returns Boolean
typeof [1,2,3,4]    // returns object
typeof myName       // returns undefined
// Step 10 Done

// Step 11 - Concatenation operator (+)
var firstName = "Zak";
var lastName = "Ruvalcaba";
alert("Hello " + firstName + ' ' + lastName + ", welcome to JavaScript class!");
// Step 11 Done

// Step 12
var myName = "Ron";
var myLastname = "Mariano";
alert("Hello " + myName + ' ' + myLastname + ", welcome to JavaScript class!");
// Step 12 Done

// Step 13
var myName = "Ron";
var myLastname = "Mariano";
var course = "JavaScript";
alert("Hello " + myName + ' ' + myLastname + ", welcome to " + course + " class!");
// Step 13 Done

// Step 14
var myName = "Ron";
var myLastname = "Mariano";
var course = "JavaScript";
alert("Hello " + myName + ' ' + myLastname + ", \nWelcome to " + course + " class!");
// Step 14 Done

// Step 15 - name prompt
var myName = prompt("What is your name?");
var myLastname = "Mariano";
var course = "JavaScript";
alert("Hello " + myName + ' ' + myLastname + ", \nWelcome to " + course + " class!");
// Step 15 Done

// Step 16 - course prompt
var myName = prompt("What is your name?");
var myLastname = "Mariano";
var course = prompt("What class are you taking?");
alert("Hello " + myName + ' ' + myLastname + ", \nWelcome to " + course + " class!");
// Step 16 Done

// Step 17
x = 10;
y = 20;
console.log(x + y);
// Step 17 Done

// Step 18
var x = 20;
console.log(x + 20);
// Step 18 Done

//Step 19
var x = 20;
console.log(x * 5);
// Step 19 Done

// Step 20
var x = (20%3);
console.log(x/1);
//Step 20 Done

// Step 21
var x = 1;
var y = 69;
console.log(x != y);
// Step 21 Done

// Step 22
var x = 2.43;
var y = 99.98;
console.log(x > y);
// Step 22 Done

// Step 23
var widget = new Object();
typeof = [name: widget]
// Step 23 Done

// Step 24
var widget = new Object();
typeof = [true];
console.log(widget);
// Step 24 Done

// Step 25
var widget = new Object();
typeof = [false]
// Step 25 Done















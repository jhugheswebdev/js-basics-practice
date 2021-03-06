
// Lecture: Variables
/*
var name = "John";
console.log(name);

var lastName = "Smith";
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture: variables 2
/*
var name = "John";
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = "teacher";
isMarried = false;

console.log(name + " is a " + age + " years old " + job + ". Is her married? " + isMarried + ". ");

age = "thirty six";
job = "driver";

console.log(name + " is a " + age + " years old " + job + ". Is her married? " + isMarried + ". ");

//var lastName = prompt("What is the last name?");
//console.log(lastName);

alert(name + " is a " + age + " years old " + job + ". Is her married? " + isMarried + ". ");
*/

// Lecture: operators
/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;


console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/
/////////////////////////////////////////////
// Lecture: if/else statements

/*
var name = "John";
var age = 26;
var isMarried = "yes";

if(isMarried === "yes") {
  // if (false)
  console.log(name + " is married.");
} else {
  console.log(name + " will hopefully marry soon :)");
}

isMarried = true;

/*if(isMarried) {
  console.log("YES!");
} else {
  console.log("NO!");
}

if(isMarried) {
  console.log("YES!");
}

if(23 === "23") {
  console.log("Something to print...");
} else {
  console.log("FALSE");
}
*/

/////////////////////////////////////////
// Lecture: boolean logic and switch
/*
var age = 20;

if(age < 20) {
  console.log("John is a teenager.");
} else if (age >= 20 && age < 30) {
  console.log("John is a young man.");
} else {
  console.log("John is a man.");
}

var job = "teacher";

job = prompt("what does john do?")

switch (job) {
  case "teacher":
    console.log("John teaches kids.");
    break;
  case "driver":
    console.log("John drives a cab in Lisbon.");
    break;
  case "cop":
    console.log("John helps fight crime.");
    break;
  default:
   console.log("John does something else.");
}
*/
////////////////////////////////////////////////
// CODING CHALLENGE 1
/*
var johnHeight = 69;
var friendHeight = 69;
var johnAge = 40;
var friendAge = 40;
var thirdHeight = 69;
var thirdAge = 40;

var johnScore = johnHeight + 5 * johnAge;
var friendScore = friendHeight + 5 + friendAge;
var thirdScore = thirdHeight + 5 * thirdAge;

if (johnScore > friendScore && johnScore > thirdScore) {
  console.log("John is the winner! " + johnScore);
} else if (friendScore > johnScore && friendScore > thirdScore) {
  console.log("Friend is the winner! " + friendScore);
} else if (thirdScore > johnScore && thirdScore > friendScore) {
  console.log("Third guy is the winner! " + thirdScore);
} else if (johnScore == thirdScore && johnScore == friendScore && friendScore == thirdScore){
  console.log("Its a draw! " + "John: " + johnScore + " vs. " + "Friend: " + friendScore + " vs. " + "Third guy: " + thirdScore);
} else {
  console.log("Two guys draw! " + "John: " + johnScore + " vs. " + "Friend: " + friendScore + " vs. " + "Third guy: " + thirdScore);
}
*/

/////////////////////////////////////////////////
// Lecture: Functions
/*
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age

  if (retirement >= 0) {
    console.log(name + " retires in " + retirement + " years.");
  } else {
      console.log(name + " has already retired.");
    }
}

yearsUntilRetirement("John", 1990);
yearsUntilRetirement("Mike", 1969);
yearsUntilRetirement("Mary", 1948);
*/

/////////////////////////////////////////////
// Functions Practice

/* function reverseNumber(number) {
  number = number + "";
  return number.split("").reverse().join("");
}

console.log(reverseNumber(34321));

///////////////////////////////////////
// Lecture: Statements and expressions

function someFun(par) {

}

var someFun = function(par) {

}

// Expressions: produce value
3 + 4;
var x = 3;

// Statements: do action
if (x === 5) {
  //do something
}
*/

////////////////////////////////////////
// Lecture: Arrays
/*
var names = ["John", "Jane", "Mark"];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
names[1] = "Ben";
console.log(names);

var john = ["John", "Smith", 1990, "designer", false];

john.push("blue");
john.unshift("Mr.");
john.pop();
john.shift();
console.log(john);

if (john.indexOf("teacher") === -1) {
  console.log("John is NOT a teacher");
}
*/

////////////////////////////////
// Lecture: Objects
/*
var john = {
    name: "John",
    lastName: "Smith",
    yearOfBirth: 1990,
    job: "teacher",
    isMarried: false
};

console.log(john.lastName);
console.log(john["lastName"]);

var xyz = "job";
console.log(john[xyz]);

john.lastName = "Miller";
john["job"] = "programmer";

console.log(john);

var jane = new Object();
jane.name = "jane";
jane.lastName = "Smith";
jane["yearOfBirth"] = 1969;
jane["job"] = 'retired';
jane["isMarried"] = true;

console.log(jane);
*/

/////////////////////////////////
// Lecture: Objects and methods
/*
//version 1.0
var john = {
    name: "John",
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function () {
        return 2016 - this.yearOfBirth;
    }
};
*/
/*
//console.log(john.calculateAge(1990));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/
/*
//version 2.0
var john = {
    name: "John",
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function () {
        //return 2016 - this.yearOfBirth;
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);


var mike = {
    yearOfBirth: 1990,
    calculateAge: function () {
        return 2016 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);
*/

///////////////////////////////////////////
// Lecture: Loops

// For Loops
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}

0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
9, true, print 9, update i to 9
10, FALSE, end loop!
*/
/*
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0 ;i--) {
    console.log(names[i]);
}

// While Loops
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

// break
for (var i = 1; i <= 5; i++) {
    console.log(i);

    if (i === 3) {
        break;
    }
}
// continue
for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
*/

/////////////////////////////////
// CODING CHALLENGE 2


function printFullAge(yearOfBirth) {
    var ages = [];
    var fullAges = []

    for (i = 0; i < yearOfBirth.length; i++) {
            ages[i] = 2017 - yearOfBirth[i];
    }

    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + " " + "full age ");
            fullAges.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + " " + 'not full age ');
            fullAges.push(false);
        }
    }

    return fullAges;
}

var yearOfBirth = [1990, 1979, 1920, 2001];
var full_1 = printFullAge(yearOfBirth);
var full_2 = printFullAge([2012, 1915, 1999]);

console.log("hello");
let firstName ;
// console.log(typeof (firstName));

//falsy values- false , "", null, undefined, 0
// let winningNumber = 19;
// let userGuess = prompt("guess a number");// this is typeof string, if we want to convert to number,
// // we do +prompt("guess a number");
//
// console.log(userGuess, typeof userGuess);

// let fruits = ["apple","oranges","grapes"];
// fruits.push("melon");
// console.log(fruits);
// fruits.pop()
// console.log(fruits);
// fruits.shift() // removes from start of array
// console.log(fruits);
// fruits.unshift("avacado") // adds on start of array
// console.log(fruits);

//primitive vs reference type
// primitive variables occupy a place in stack, 1 for each variable, while for reference type, the stack stores a location in memory,
//cloning of array
// let array1 = ["item1","item2"]
// let array2 = array1.slice(0);
// let array2 = [].concat(array1);
// let oneMore = ["item3","item4"]
// let array2 = [...array1,...oneMore]//spread operator
//
// console.log(array1 === array2)
// console.log(array1)
// console.log(array2)

//array destructuring
// let [var1, var2, ...newVar] = array2 // observe the difference between this line and next line
// let [var1, ,var2, ...newVar] = array2
// console.log("value of var1 "+var1)
// console.log("value of newVar array"+newVar)

//dot and bracket notation
const person1 = {};
person1['firstname'] = 'Mario';
person1['lastname'] = 'Rossi';

// console.log(person1.firstname);
const key = "email"
const person2 = {
    firstname: 'John',
    lastname: 'Doe',
    "personal interest": ["sleeping", "listening music"]
};
// console.log(person2['lastname']);
// console.log(person2['personal interest'][0]);
person2.key = "jas@g.com"
// console.log(person2);
person2[key] = "jas@g.com"
// console.log(person2);
// console.log(person2["email"]);

//iterate an object
for(let key in person2){
    // console.log(key)//prints all keys
    // console.log(person2[key]) //prints the values of object
    // console.log(`${key}: ${person2[key]}`) //prints key :value pair

}
// console.log(Object.keys(person2))

//computed properties
const  key1 = "objKey1"
const  key2 = "objKey2"

const  value1 = "myValue1"
const  value2 = "myValue2"

const obj={
    [key1]:value1,
    [key2]:value2
}
// console.log(obj)

//spread operator
const  newArray = [..."123456"] // it has to be an iterable object ,like string array, we cant have [...123456]
// console.log(newArray)
const newObject = {...["item1","item2"]}
// console.log(newObject)


//object destructuring
const band={
    bandName:"MLTR",
    bandSong:"love is all",
    year: 1996
}
// let bandN = band.bandName
// console.log(bandN)

const {bandName,bandSong} = band // instead of doing like above ,we are destructuring obj like this
// console.log(bandName)
const {bandName:var1,bandSong:var2,...restProp} = band
// console.log(var2)
// console.log(restProp)

//functions declaration, expression
// function sumOfNum(num1,num2,num3){ // function declaration
//     return num1+num2+num3;
// }
// let sum = function sumOfNum(num1,num2,num3){ // function expression
//     return num1+num2+num3;
// }
// console.log(sum(1,2,3))

let sum =  (num1,num2,num3) =>{ // arrow function
    return num1+num2+num3;
}
// console.log(sum(1,2,3))

// lexical scope
// block scope vs function scope
//let and const are block scope, var is function scope

// var scope = "I am global";
// function whatismyscope(){
//     // var scope = "I am just a local";
//     function func() {
//         console.log(" "+ scope)}
//      func();
// }
//
// whatismyscope()

// var scope = "I am global";
// function whatismyscope(){
//     var scope = "I am just a local";
//     function func() {return scope;}
//     return func;
// }
//
// whatismyscope()()

//default parameters
function addTwo(a,b=0){
    return a+b
}

// console.log(addTwo(4))

// rest parameters
// function sum1(...theArgs) {
//     let total = 0;
//     for (const arg of theArgs) {
//         total += arg;
//     }
//     return total;
// }
//
// console.log(sum1(1, 2, 3));

//object destructuring
// const emp = ['jas', 1211, 'Software Engineer'];// this is array for destructuring
const emp = { // this is obj for destructuring
    name:'jas',
    id: 1211,
    role:'Software Engineer'};
// function getDetails([ , id, designation]){
//     console.log(`Employee ID: ${id}, Designation: ${designation}`);
// }
function getDetails({  id, role,sal}){
    // console.log(`Employee ID: ${id}, Designation: ${role}, ${sal}`);
}

getDetails(emp);

//callback funstion
// function greeting(name) {
//     alert('Hello ' + name);
// }
//
// function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
// }
//
// processUserInput(greeting);

//function returning function , these and callback function are called higher order functions
function fun1() {
    function fun2() {
        return "From function fun2";
    }
    return fun2();
}
const some = fun1()
// console.log(some)

//important methods
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, index) => {
    // console.log('Index: ' + index + ' Value: ' + number);
// });

const users = [
    {fName:"jas",age:19},
    {fName:"alip",age:20},
]
// users.forEach((users, index) => {
//     console.log('Index: ' + index + ' Value: ' + users.fName);
// });

let arr = [3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++){
//     arr[i] = arr[i] * 3;
// }

// console.log(arr); // [9, 12, 15, 18]

// let modifiedArr = arr.map(function(element){
//     return element *3;
// });
//
// console.log(modifiedArr); // [9, 12, 15, 18]
//
// const evenNum = modifiedArr.filter((number) => {
//     return number%2 === 0
// })
// console.log(evenNum);

const message = ["JavaScript ", "is ", "fun."];

// function to join each string elements
function joinStrings(accumulator, currentValue) {
    return accumulator + currentValue;
}
// arr.reduce(callback(accumulator, currentValue), initialValue) //syntax of reduce
// reduce join each element of the string
let joinedString = message.reduce(joinStrings);
// console.log(joinedString);

//sort
const points = [40, 100, 1, 5, 25, 10];
const ascSort = points.sort(function(a, b){return a-b}); // ascending order
// console.log(ascSort)
points.sort(function(a, b){return b-a}); // descending order
const descSortUsers = users.sort(function(a, b){return b.age-a.age}); // ascending order
// console.log(descSortUsers)

var array = [-10, -0.20, 0.30, -40, -50];
var found = array.find(function (element) { // find returns only the first occurance
    return element > 0;
});
// console.log(found)

//every returns true or false, it returns true if every element satisfies the criteria
const ages = [32, 33, 18, 40];

// const adultAge = ages.every(checkAge)
const adultAge = ages.every(a => a>18)
function checkAge(age) {
    return age > 18;
}
// console.log(adultAge)
const adultAgeSome = ages.some(a => a>18) // some returns true if even 1 element satisfies criteria
// console.log(adultAgeSome)

// const array1 = [1, 2, 3, 4];
//
// // fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// // expected output: [1, 2, 0, 0]
//
// // fill with 5 from position 1
// console.log(array1.fill(5, 1));
// // expected output: [1, 5, 5, 5]
//
// console.log(array1.fill(6));
// // expected output: [6, 6, 6, 6]

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]
//
// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]

//iterables, jispe hum for of loop laga sake, like string, array, objects ar not iterable
// const fName = "jas"
// for(let char of fName)
//     console.log(char)
//array like object, jiske pas length property hai, aur hum index se access kar sake, like string
// console.log(fName.length)
// console.log(fName[1])

//set is iterable, store data,have its own methods, no index based access, order is not guaranteed, unique items
const item = ["item1","item2"]
const itemSet = new Set(item)
itemSet.add(1)
itemSet.add(["dup1","dup2"])// both gets added, as when we put [] it is treated as new object by JS,even if contents are duplicate
itemSet.add(["dup1","dup2"])
console.log(itemSet)
console.log(itemSet.has(1))

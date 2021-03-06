/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
 console.log("\n--------------<Exercise 1>----------------") 
 
 const areaOfARectangle = function(firstNumber, secondNumber) { 
     let result = firstNumber * secondNumber
     return result
 }

 console.log("\n----------------<Test>----------------")
let areaOfRectB = areaOfARectangle(11, 12) 
 console.log(areaOfRectB)

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
console.log("\n------------<Exercise 2>-------------")

const crazySum = function(firstInteger , secondInteger) {
    if(firstInteger !== secondInteger) {
        return firstInteger + secondInteger
    } else {
        return (firstInteger + secondInteger) * 3
    }
}
console.log("\n----------------<Test>----------------")
let sum = crazySum(5 , 2) 
console.log(sum) 

let sum2 = crazySum(5 , 5) 
console.log(sum2)

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
console.log("\n-----------------<Exercise 3>--------------------")

const crazyDiff = function(number) {
    if(number > 19) {
        return 3 * Math.abs(number - 19)
    } else {
        return Math.abs(number - 19) 
    }
}

console.log("\n----------------<Test>----------------") 
let diff = crazyDiff (20 , 19)
console.log(diff) 
/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
console.log("\n----------------<Exercise 4>----------------")

const boundary = function(n) {
    if((n > 20 && n <= 100) || n === 400){
        return true 
    }
     return false  
}

let isWithin = boundary(40) 
console.log(isWithin)

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
/*console.log("\n----------------<Exercise 5>----------------")

const strivify = function (str) {
    if 
} */
/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
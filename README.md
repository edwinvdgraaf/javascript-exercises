# Javascript exercises

## Gettings started

1. Make sure you have a node.js installed
  1a. `$ brew install node.js` or the installer from the node.js website
1. Install this projects dependencies
1. Run `npm test`

## Exercise 1 - Working with strings, numbers, arrays and control flows

In the first exercise we will explore the runtime type system, to see if a value is of a
certain type. Even though the typesystem in javascript is limited and without compiler checks
we can do powerfull stuff with it.

### Tasks

1. Enable exercise 1 in `enabled-exercises.js`
1. Run the tests by running `$ npm test` or `jest --watch`
1. Implement the `isString(anyObject)`, `isPalindrome(string)` and `titleize(string)`.
1. Re-run the test to see if the implementation works


### References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


## Exercise 2

In this exercise will explore object literals, which can hold data and can be used for data encapsulation.

### Tasks

1. Enabled exercise 2 in `enabled-exercises.js`
1. Run the tests by running `$ npm test` or `jest --watch`
1. Implement the `getValueForPath()` that given an object and a string both returns the value that is hold in that nested property.
1. Re-run the test to see if the implementation works

### References

* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics


## Exercise 3 - Bouncing balls

A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

Three conditions must be met for a valid experiment:
1. Float parameter "h" in meters must be greater than 0
1. Float parameter "bounce" must be greater than 0 and less than 1
1. Float parameter "window" must be less than h.

If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note: The ball can only be seen if the height of the rebounding ball is stricty greater than the window parameter.

Example:

```
h = 3, bounce = 0.66, window = 1.5, result is 3
h = 3, bounce = 1, window = 1.5, result is -1 (Condition 2) not fulfilled).
```

### Tasks

1. Enable exercise 3 in `enabled-exercises.js`
1. Implement the bouncingBall function in `./src/exercise-3.js`
1. Re-run the test to see if the implementation works


## Exercise 4 - The functional calculator
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

```
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
```

* There must be a function for each number from 0 ("zero") to 9 ("nine")
* There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
* Each calculation consist of exactly one operation and two numbers
* The most outer function represents the left operand, the most inner function represents the right operand
* Divison should be integer division, e.g eight(dividedBy(three())) should return 2, not 2.666666...

### Tasks

1. Enable exercise 4 in `enabled-exercises.js`
1. Implement the methods in `./src/exercise-4.js` to make the functional calculator work
1. Re-run the test to see if the implementation works

### Exercise 5 - Implement palindrome in the browser
Lets explore some browser functions, and reuse a function which we ealier used. For this exercise we have
created a HTML form for you, which can use to acquire user input. When the user clicks the button we'd like
to show to the user if the entered string is a palindrome. You've already builded the check for this in exercise 1
feel free to reuse this code, by importing inside exercise 5. 

Sadly no tests, :-(

### Tasks
1. Open `exercise-5.js` here we will make the implementation
1. Start the development server with `npm start`.
1. Open the browser on http://localhost:1234/
1. Add an event listener for when the user clicks the form button
1. Extract the value from the input element
1. Check if the value is a palindrome
1. Notify the user with the answer

### References

* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#Core_Interfaces_in_the_DOM
* https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

## Credits

Exercises 3 and 4 are orignely found at codewars.com, credits to the creators of those.

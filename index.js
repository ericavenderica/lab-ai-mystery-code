 //Case 1: The Infinite Loop

function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
  }
  return false;
}

/* By the logic the function is meant to check whether the array contains any even number so it should 
return true if it finds an even value, otherwise it's false but what the function actually does is it enters a while loop 
but never increments i so, i stays 0 forever, if arr[0] is even → returns true immediately and if arr[0] is odd → infinite loop which never reaches return false and
since also there's no i++ inside the loop, the loop progresses which causes in case 1 the arr[0] being even and returns true right away.
 and in case 2 the arr[0] being odd so the i never changes, so the condition i < arr.length is always true and the function 
 loops forever and never returns false.
 
 The Correct version should be :

 function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
    i++;
  }
  return false;
}
 */



//Case 2: The Cryptic Function

function q(q){return q.split('').reverse().join('')==q}

/* This function is taking the string q, splits it into characters → q.split(''),
reverses the array with .reverse(), joins it back into a string with .join('') and compares the reversed 
string to the original.
So the function returns true if the string reads the same forward and backward and false otherwise.
 

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

Changes made are function name: q → isPalindrome, parameter name: q → str 
and added variable: reversed for readability
*/



//Case 3: The Over-Engineered Mess

function complicatedCalc(a, b) {
  let x = a;
  let y = b;
  for (let i = 0; i < b; i++) {
    x = x + 1;
    y = y - 1;
  }
  return x;
}

/* Despite the loop and extra variables, the function is simply computing a + b
The y variable and the loop don’t change the final result.

Simplied Version

function add(a, b) {
  return a + b;

*/


//Final Deliverables

/*
### Case 1: Infinite Loop

:brain: Prompt used: “Why is this loop never ending?”
:robot: AI suggested: Add `i++` in the loop.
:bulb: My Insight: It was checking the even numbers but it was never moving forward.

:white_check_mark: Fix: Added `i++` and explained loop logic with comments.



 ### Case 2: The Cryptic Function

:brain: Prompt used: “What this function is really doing?”
:robot: AI suggested: Simply checking whether the input string is a palindrome.
:bulb: My Insight: It was checking if the input string is a palindrome.

:white_check_mark: Fix: Added a clearer version of the same function and explained the logic with comments.




### Case 3: The Over-Engineered Mess

:brain: Prompt used: “How to simplify this function in plain JavaScript and What’s the intent?”
:robot: AI suggested: Despite the loop and extra variables, the function is simply computing: a+b.
:bulb: My Insight: It's simplu computing a + b.

:white_check_mark: Fix: Added a clearer version of the same function and explained the logic with comments.
.
*/
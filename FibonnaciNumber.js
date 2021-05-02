The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

Iterative approach:
time: 0(n)
space: O(1)

var fib = function(n) {
  if (n === 0 || n === 1) {
      return n;
  }

  var prev1 = 0;
  var prev2 = 1;
  var current = 0;

  for (var i = 2; i <= n; i++) {
      current = prev1 + prev2;
      prev1 = prev2;
      prev2 = current;
  }
  return current;
};


Recursive approach:
time: 0(n)
space: O(2^n)
var fib = function(n) {
  // at the start it would return if n is === to 0 or 1
  if (n == 0 || n == 1) {
      return n
  }

  // result would be determined by added the 2 previous. but this would be very slow due to it using 2 recursions

  let result = fib(n-1) + fib(n-2)
  return result
};

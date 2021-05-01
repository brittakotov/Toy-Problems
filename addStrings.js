Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"


var addStrings = function(num1, num2) {
  var max = (Math.max(num1.length, num2.length));
  var carry = 0;
  var result = '';

  for (var i = 0; i < max; i++) {
      var sum = (Number(num1[num1.length - 1 - i]) || 0) + (Number(num2[num2.length - 1 - i]) || 0) + carry;
      carry = Math.floor(sum / 10)
      console.log(carry)
      sum = sum % 10;
      result = String(sum) + result;
  }
  if (carry !== 0) {
    result = String(carry) + result;
  }
  return result;
};
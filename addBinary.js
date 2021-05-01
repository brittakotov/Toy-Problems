Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

function addBinary (a, b) {
  var max = (Math.max(a.length, b.length));
  var carry = 0;
  var result = '';

  for (var i = 0; i < max ; i++) {
    var sum = Number(a[a.length - 1 - i] || 0) + Number(b[b.length - 1 - i] || 0) + carry;
    carry = Math.floor(sum / 2);
    sum = sum % 2;
    result = String(sum) + result;
  }
  if (carry !== 0) {
    result = String(carry) + result;
  }
  return result;
}


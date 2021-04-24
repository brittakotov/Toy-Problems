Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if (s.length % 2 === 1) {
      return false;
  }

  var tracker = {
      '(': ')',
      '[': ']',
      '{': '}'
  }
  var stack = [];
  for (var i = 0; i < s.length; i++) {
      if (tracker[s[i]]) {
        stack.push(s[i]);
      } else if (s[i] !== tracker[stack.pop()]) {
          return false;
      }
  }
  if (stack.length === 0) {
      return true;
  } else {
      return false;
  }
};

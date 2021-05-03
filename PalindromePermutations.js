Given a string s, return true if a permutation of the string could form a palindrome.

Example 1:

Input: s = "code"
Output: false
Example 2:

Input: s = "aab"
Output: true
Example 3:

Input: s = "carerac"
Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
 var canPermutePalindrome = function(s) {
  var set = new Set();

  for (var i = 0; i < s.length; i++) {
      if (set.has(s[i])) {
          set.delete(s[i]);
      } else {
          set.add(s[i]);
      }
  }
  if (set.size <= 1) {
      return true;
  }

  return false;
};
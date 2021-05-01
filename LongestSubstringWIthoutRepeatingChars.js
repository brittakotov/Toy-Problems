Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  var count = 0;
  var start = 0;
  var end = 0;
  var length = s.length;
  var set = new Set();

  while (start < length && end < length) {
      var char = s[end];
      if (!set.has(char)) {
          set.add(char);
          end++;
          count = Math.max(count, end-start);
      } else {
          set.delete(s[start]);
          start++;
      }
  }
  return count;
};
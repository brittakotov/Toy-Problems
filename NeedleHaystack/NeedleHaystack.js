/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 **/

//Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0

 var strStr = function(haystack, needle) {
  if (haystack.length === 0 && needle.length === 0) {
      return 0;
  }
  var hay = haystack.split('');
  var needleLength = needle.length;
  var index = -1;

  for (var i = 0; i < hay.length; i++) {
    if (haystack.substring(i, i + needleLength) === needle) {
      return i;
    }
  }

  return index;
};
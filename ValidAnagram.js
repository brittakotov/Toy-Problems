Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }

  var objS = {}
  var objT = {};

  for (var i = 0; i < s.length; i++) {
      if (!objS[s[i]]) {
          objS[s[i]] = 1;
      } else {
          objS[s[i]]++;
      }
  }

  for (var i = 0; i < t.length; i++) {
      if (!objT[t[i]]) {
          objT[t[i]] = 1;
      } else {
          objT[t[i]]++;
      }
  }

  if (Object.keys(objS).length !== Object.keys(objT).length) {
      return false;
  }

  for (var key in objS) {
      if (objS[key] !== objT[key]) {
          return false;
      }
  }

  return true;

};
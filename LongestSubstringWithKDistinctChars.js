Given a string, find the length of the longest substring in it with no more than K distinct characters.

You can assume that K is less than or equal to the length of the given string.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".
Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

const longest_substring_with_k_distinct = function(str, k) {
  let start = 0;
  let count = 0;
  let map = {};

  for (var end = 0; end < str.length; end++) {
    if (map[str[end]] === undefined) {
      map[str[end]] = 1;
    } else {
      map[str[end]] ++;
    }
    while (Object.keys(map).length > k) {
      if (map[str[start]] > 1) {
        map[str[start]] --;
      } else {
        delete map[str[start]];
      }
      start++;
    }

    count = Math.max(count, (end - start) + 1)
  }
  return count;
};

time complexity: O(n)
Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
Example 2:

Input: [2, 1, 5, 2, 8], S=7
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
Example 3:

Input: [3, 4, 1, 1, 6], S=8
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1]
or [1, 1, 6].

const smallest_subarray_with_given_sum = function(s, arr) {
  let start = 0;
  let subLength = Infinity;
  let windowSum = 0;

  for (var end = 0; end < arr.length; end++) {
    windowSum += arr[end];

    while (windowSum >= s) {
      subLength = Math.min(subLength, (end - start) +1)
      windowSum -= arr[start];
      start ++;
    }
  }
  if (subLength === Infinity) {
    return 0;
  }
  return subLength;
};

time complexity: O(n + n) -> O(n)
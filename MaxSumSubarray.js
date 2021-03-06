Given an array of positive numbers and a positive number âk,â find the maximum sum of any contiguous subarray of size âkâ.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
Example 2:

Input: [2, 3, 4, 1, 5], k=2
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

const max_sub_array_of_size_k = function(k, arr) {
  var start = 0;
  var maxSum = 0;
  var windowSum = 0;

  for (var i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    if (i >= k - 1) {
      maxSum = Math.max(maxSum, windowSum)
      windowSum -= arr[start];
      start ++;
    }
  }
  return maxSum;
};

time complexity: O(n)
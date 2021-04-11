// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.



// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

var productExceptSelf = function(nums) {
  var final=[];
  for(var i = 0; i < nums.length; i++) {
    var product = 1;
    for (var j = 0; j < nums.length; j++) {
      if (j !== i) {
        product = product * nums[j];
      }
    }
    if (product === -0) {
      product = Math.abs(product)
    }
    final.push(product);
  }
  return final;
};
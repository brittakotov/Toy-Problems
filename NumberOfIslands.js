Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.



Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */

 var numIslands = function(grid) {

  var helper = (i, j) => {
      //if i or j are out of bounds or if square is 0, return
      if (i < 0 || j < 0 || i > grid.length -1 || j > grid[i].length - 1 || grid[i][j] === '0') {
          return;
      }
      //change grid to zero
      grid[i][j] = '0';

      //check all directions
      helper(i+1, j)
      helper(i-1, j)
      helper(i, j+1);
      helper(i, j-1);
  }

  var count = 0;
  //start from top left corner, iterate over each grid swuare
  for (var i = 0; i < grid.length; i++) {
      for (var j = 0; j < grid[i].length; j++) {
          //if you see a one, increment count, and use recursive helper to check all directions
          if (grid[i][j] === '1') {
              count ++;
              helper(i, j);
          }
      }
  }
  return count;

};
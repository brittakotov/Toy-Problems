You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.


Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
  var max = 0;
  var area = 0;

  var explore = (i, j) => {
    if (i < 0 || j < 0 || i > grid.length-1  || j > grid[i].length-1  || grid[i][j] === 0) {
        return ;
    }
    grid[i][j] = 0;
    area ++;

    explore(i+1, j);
    explore(i-1, j);
    explore(i, j-1);
    explore(i, j+1);
  }

  for (var i = 0; i < grid.length; i++) {
      for (var j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === 1) {
            area = 0;
               explore(i,j);
               if (area > max) {
               max = area;
               }
           }
      }
  }
  return max;
};
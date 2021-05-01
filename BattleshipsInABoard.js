Given an m x n matrix board where each cell is a battleship 'X' or empty '.', return the number of the battleships on board.

Battleships can only be placed horizontally or vertically on board. In other words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column), where k can be of any size. At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships).



Example 1:


Input: board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
Output: 2
Example 2:

Input: board = [["."]]
Output: 0

var countBattleships = function(board) {
  var explore = (i, j) => {
      if (i < 0 || j < 0 || i > board.length - 1 || j > board[i].length - 1 || board[i][j] === '.') {
          return;
      }

      board[i][j] = '.';

      explore(i+1, j)
      explore(i-1, j)
      explore(i, j-1)
      explore(i, j+1)
  }

  var count = 0;

  for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[i].length; j++) {
          if (board[i][j] === 'X') {
              count++;
              explore(i,j)
          }
      }
  }
  return count;
};
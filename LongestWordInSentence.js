Given a sentence, return the longest word.

var longestWord = (str) => {
  str = str.split(' ');
  var longest = str[0].length;
  var word = '';
  for (var i = 0; i < str.length; i++) {
    var length = str[i].length;
    if (length > longest) {
      longest = length;
      word = str[i];
    }
  }
  return word;
}
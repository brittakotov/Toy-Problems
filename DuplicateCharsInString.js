Given a string, return the duplicate characters without using a hash map.

var findDuplicates = (str) => {
  str = str.split('');
  var result = [];
  var dups = [];
  for (var i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) === -1) {
      result.push(str[i])
    } else {
      dups.push(str[i])
    }
  }
  return dups;
}
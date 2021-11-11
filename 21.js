function solution(string) {
  var arr = string.split('');
  var strArr = string.toUpperCase().split('');
  var temp = [];
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == strArr[i]) {
      temp.push(i);
    }
  }
  var count = 0;
  for (var j = 0; j < temp.length; j++) {
    arr.splice(temp[j] + count, 0, ' ');
    count++;
  }
  return arr.join('');
}
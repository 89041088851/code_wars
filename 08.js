function highAndLow(numbers){
  num=numbers.split(' ');
  var max = parseInt(num[0]);
  var min = parseInt(num[0]);
  for (var i = 0; i <= num.length; i++) {
    if(parseInt(num[i]) > max){
      max = parseInt(num[i]);
    }
  }
  for (var i = 0; i <= num.length; i++) {
    if(parseInt(num[i]) < min){
      min = parseInt(num[i]);
    } 
 }
 return (max + " " + min);
}
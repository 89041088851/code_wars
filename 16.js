function comp(array1, array2){
  if(array1.length === 0 || array2.length === 0){
    return false;
  }
  var arr = array1.map(function(num){return num*num});
  var arr2 = [];
  for(var i = 0; i < arr.length; i++){
    if(array2.includes(arr[i])){
      arr2.push(true);
      var a = array2.indexOf(arr[i]);
     array2.splice(a,1);
    } else{
      arr2.push(false);
    }
  }
  return arr2.includes(false) ? false : true;
}
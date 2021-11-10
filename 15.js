var uniqueInOrder=function(iterable){
  var tmp = [];
  for(var i = 0 ; i<iterable.length ; i++){
    if(iterable[i] !=iterable[i+1]){
      tmp.push(iterable[i])
    }
  }
  return tmp
}
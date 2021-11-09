function XO(str) {
  let x = 0;
  let o = 0;
  let ret = str.toLowerCase().split("")
  
  for( i = 0; i < ret.length; ++i) {
    if(ret[i] == "x")
      x++;
    if(ret[i] == "o")
      o++;
  };
  
  
  if(x === o)
    return true;
  else if (x !== o)
    return false;
  if(x === 0 && o === 0)
    return true;
  };
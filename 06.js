const binaryArrayToNumber = arr => {
  // your code
  return arr.reduce((acc,cur,index)=>{
    return acc + cur*Math.pow(2, arr.length-1-index)
  },0)
};
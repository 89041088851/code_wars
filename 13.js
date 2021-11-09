function sumTwoSmallestNumbers(numbers) {  
  let sortNumbers = numbers.sort( (a, b) => a - b )
  return sortNumbers[0] + sortNumbers[1]
};

sumTwoSmallestNumbers([2, 89, 1, 4])
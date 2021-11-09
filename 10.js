function queueTime(customers, n) {
  let i = 0,
      tills = [];
  for(i; i < n; i++){
    tills[i] = 0;
  }

  customers.forEach((min) => {
    tills.fill((getMin(tills)['min'] + min), getMin(tills)['index'], getMin(tills)['index'] + 1);
  });
  return Math.max(...tills);
}

function getMin(tills) {
  let min = tills[0],
      index = 0;
  tills.forEach((till, key) => {
    if(till < min) {
      min = till;
      index = key;
    }
  });
  return {'index': index, 'min': min};
}
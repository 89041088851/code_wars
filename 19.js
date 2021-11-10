function towerBuilder(nFloors) {
  var finalArray = [];
  for (var i = nFloors - 1; i >= 0; i--) {
    var spaces = nFloors - i;
    var stars = i;
    finalArray.push(" ".repeat(spaces) + "*".repeat(stars));
  }
  return finalArray.reverse();
}
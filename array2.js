var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var mostFrequentItem = null;
var maxCt = 0;

for (var i = 0; i < arr1.length; i++) {
  var count = 0;

  for (var j = 0; j < arr1.length; j++) {
    if (arr1[i] === arr1[j]) {
      count++;
    }
  }

  if (count > maxCt) {
    maxCt = count;
    mostFrequentItem = arr1[i];
  }
}
console.log(mostFrequentItem + " (" + maxCt + " times)");

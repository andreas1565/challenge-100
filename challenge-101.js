function FindMinMax(array) {
  const min = Math.min.apply(null, array);
  const max = Math.max.apply(null, array);
  return { min, max };
}

const test = FindMinMax([1, 2, 3, 4, 5]);
console.log(test);

const test2 = FindMinMax([2334454, 5]);
console.log(test2);

const test3 = FindMinMax([[1]]);
console.log(test3);

function dominator(Arr) {
  const map = Arr.reduce(
    (map, currentValue) =>
      map.set(currentValue, (map.get(currentValue) || 0) + 1),
    new Map()
  );
  console.log(map)
  let maxValue = -1;
  map.forEach((value, key) => {
    if (value > Arr.length / 2) {
        maxValue = key;
    }
  });
  console.log(maxValue)
  if(maxValue === -1) {
      return maxValue
  }
  return Arr.indexOf(maxValue)
}

const input1 = [3,4,3,2,3,-1,3,3]
const input2 = [3,4,3,2,3,-1,4,13]
const input3 = [2,2,2,2,1,4,4,4,5,4,4,4,4]

console.log(dominator(input1))
console.log(dominator(input2))
console.log(dominator(input3))
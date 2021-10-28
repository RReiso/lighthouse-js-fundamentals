const merge = (arr1, arr2) => {
  let res = [];
  while (arr1.length && arr2.length) {
    console.log(arr2[0]);
    if (arr1[0] < arr2[0]) {
      res.push(arr1[0]);
      arr1.splice(0, 1);
    } else {
      res.push(arr2[0]);
      arr2.splice(0, 1);
    }
  }
  const arr = arr1.length ? arr1 : arr2;
  for (el of arr) {
    res.push(el);
  }
  return res;
};
console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);

const isOdd = (num) => {
  return num % 2 !== 0;
};

for (num of [1, 2, 3, 4]) {
  console.log(isOdd(num));
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));

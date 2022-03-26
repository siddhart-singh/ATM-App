`use strict`;
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrent = dogsJulia.slice(1, -2);
  const allDogs = dogsJuliaCorrent.concat(dogsKate);
  allDogs.forEach(function (value, key) {
    console.log(
      `Dog number ${key + 1} is an ${
        value < 3 ? 'puppy' : 'adult'
      } and is ${value} years old`
    );
    return allDogs;
  });
};

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const allDogs = checkDogs(dogsJulia, dogsKate);

const calcAverageHumanAge = function (dogAge) {
  const humanAge = dogAge
    .map(curr => (curr <= 2 ? 2 * curr : 16 + curr * 4))
    .filter(curr => curr > 18)
    .reduce((acc, curr) => acc + curr, 0);
  console.log(humanAge / dogAge.length);
};

const data1 = [5, 2, 4, 1, 15, 8, 3];
calcAverageHumanAge(data1);

/*/ `returnLastTwoDrivers()` — Declare a variable with `const` that is assigned an
  anonymous function. The assigned function should take one argument, an array
  containing the names of Scuber's drivers, and return a new array containing
  the **last** two drivers in the array:

```js
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
// => ['Amari', 'Mo']
```

- `selectingDrivers` — This is an array containing two elements: the two
  functions that we previously defined (`returnFirstTwoDrivers()` and
  `returnLastTwoDrivers()`).
- `createFareMultiplier()` — This is a higher-order function that takes in one
  argument, an integer, and returns a function that will multiply a fare for a
  ride accordingly. For example, if `createFareMultiplier()` receives an argument
  of `4`, it will return a function that takes in a fare as an argument and
  quadruples the fare.
- `fareDoubler()` — Declare a variable with `const` and assign a function
  returned by `createFareMultiplier()` to it. Invoke `createFareMultiplier()` in
  such a way that the new `fareDoubler()` function accepts a fare as its lone
  argument and doubles it.
- `fareTripler()` — Declare a variable with `const` and assign a function
  returned by `createFareMultiplier()` to it. Invoke `createFareMultiplier()` in
  such a way that the new `fareTripler()` function accepts a fare as its lone
  argument and triples it.
- `selectDifferentDrivers()` — This function takes two arguments, an array of
  the names of Scuber's `drivers` and either the `returnFirstTwoDrivers()` or
  `returnLastTwoDrivers()` function. Based on these two arguments,
  `selectDifferentDrivers()` will return either the first two drivers or the
  last two drivers.
*/

// Return first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  }
  
  // Return last two drivers
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }
  
  // Array of selecting drivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Higher-order function that takes in an integer and returns a function
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    }
  }
  
  // Function that doubles the fare
  const fareDoubler = createFareMultiplier(2);
  
  // Function that triples the fare
  const fareTripler = createFareMultiplier(3);
  
  // Function that returns either the first two drivers or the last two drivers
  const selectDifferentDrivers = function(drivers, selectDriversFunction) {
    return selectDriversFunction(drivers);
  }
  
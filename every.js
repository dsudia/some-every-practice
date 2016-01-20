module.exports = {
  allEven : allEven,
  allSameType : allSameType,
  positiveMatrix : positiveMatrix,
  allSameVowels : allSameVowels
};

// Check to see if all elements in an array
// are even numbers.

function allEven (input) {
  return input.every(function(num) {
    return (num % 2 === 0);
  });
}

// Check to see if all elements in an array
// are of the same type.

function allSameType (input) {
  return input.every(function(num) {
    return typeof num === 'number';
  });
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix (input) {
  for (i = 0; i < input.length; i++) {
    var end = input[i].every(function(num) {
      return num > 0;
    });
  }
  return end;
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels (input) {
  return input.every(function(str) {
    return typeof str === 'string';
  });
}
// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { test } = require("picomatch")

// const { describe } = require("yargs")

// const { it } = require("@jest/globals")

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe('When remAndShuff is called', () => {
  it('returns the first value removed and the rest shuffled', () => {
    // Arrange
    const colors = ["purple", "blue", "green", "yellow", "pink"]

    // Act 
    const actualResult = remAndShuff(colors)

    // Assert
    expect(actualResult).toEqual(['blue', 'pink', 'green', 'yellow'])
  })
  
  it('returns the first value removed and the rest shuffled', () => {
    // Arrange
    const colors = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

    // Act 
    const actualResult = remAndShuff(colors)

    // Assert
    expect(actualResult).toEqual([ 'indigo', 'aquamarine', 'periwinkle', 'saffron', 'ochre' ])
  })
})


// b) Create the function that makes the test pass.

// ****** Makes Math.random() always equal 0.5 ******
const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

// ** returns blue as undefined ** returning later
// const remAndShuff = (array) => {
//   array.shift()
//   console.log('this',array)
//   return [...array].map((value, index, arrayCopy) => {
//     let random = index + (Math.floor(Math.random() * arrayCopy.length - 1));
//     [arrayCopy[random], arrayCopy[index]] = [arrayCopy[index], arrayCopy[random]]
//     console.log(arrayCopy[index])
//     return arrayCopy[index]
//   })
// }
// console.log(remAndShuff(colors1))


// const remAndShuff = (array) => {
//   let newArray = array.slice(1, array.length)
//   console.log(newArray)
//   for(let i = newArray.length; i > 0; i--){
//     const randIndex = Math.floor(Math.random() * (i + 1));
//     [newArray[i], newArray[randIndex]] = [newArray[randIndex], newArray[i]]
//   }
//   console.log(newArray)
//   return newArray
// }

const remAndShuff = (array) => {
  let newArray = array.slice(1, array.length)
  for (var i = newArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  // console.log(newArray)
  return newArray
}


// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with expect statements for each of the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe('When cubedSum is called', () => {
  it('returns a the sum of the cubed numbers when an array is passed', () => {
    // Arrange 
    const numbers = [2, 3, 4]

    // Act 
    const actualResult = cubedSum(numbers)

    // Assert 
    expect(actualResult).toEqual(99)
  })
  
  it('returns a the sum of the cubed numbers when an array is passed', () => {
    // Arrange 
    const numbers = [0, 5, 10]

    // Act 
    const actualResult = cubedSum(numbers)

    // Assert 
    expect(actualResult).toEqual(1125)
  })
})


// b) Create the function that makes the test pass.

const cubedSum = (arrayOfNumbers) => {
  return arrayOfNumbers.map(value => {
    return Math.pow(value,3)
  }).reduce((total, num) => total + num)
}

// const cubedSum = (arrayOfNumbers) => {
//   let newArray = arrayOfNumbers.map(value => {
//     return Math.pow(value, 3)
//     // ruby has made me soft with the implicit return. I was stuck on why it was returning an array of undefined -.- when i was just missing a return
//     console.log(Math.pow(value,3))
//   })
//   console.log(newArray)
//   return newArray.reduce((total, num) => {return total + num})
// }


// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

describe('When highLow is called', () => {
  it('returns the lowest and highest number when an array is passed', () => {
    // Arrange 
    const numbers = [3, 56, 90, -8, 0, 23, 6]

    // Act 
    const actualResult = highLow(numbers)

    // Assert 
    expect(actualResult).toEqual([-8, 90])
  })
  
  it('returns the lowest and highest number when an array is passed', () => {
    // Arrange 
    const numbers = [109, 5, 9, -59, 8, 24]

    // Act 
    const actualResult = highLow(numbers)

    // Assert 
    expect(actualResult).toEqual([-59, 109])
  })
})


// b) Create the function that makes the test pass.

const highLow = (arrayOfNumbers) => {
  return [arrayOfNumbers.sort((a,b) => a - b).shift(), arrayOfNumbers.sort((a,b) => a - b).pop()]
}



// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

// a) Create a test with expect statements for each of the variables provided.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

describe('When everyOther is called', () => {
  it('returns the lowest and highest number when an array is passed', () => {
    // Arrange 
    const string = "albatross"

    // Act 
    const actualResult = everyOther(string)

    // Assert 
    expect(actualResult).toEqual("aLbAtRoSs")
  })
  
  it('returns the lowest and highest number when an array is passed', () => {
    // Arrange 
    const string = "jabberwocky"

    // Act 
    const actualResult = everyOther(string)

    // Assert 
    expect(actualResult).toEqual("jAbBeRwOcKy")
  })
})


// b) Create the function that makes the test pass.

const everyOther = (string) => {
  return string.split('').map((value, index) => {
    return index % 2 ? value.toUpperCase() : value
  }).join('')
}



// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe('When combineArrays is called', () => {
  it('returns the lowest and highest number when an array is passed', () => {
    // Arrange 
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]

    // Act 
    const actualResult = combineArrays(testArray1, testArray2)

    // Assert 
    expect(actualResult).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})


// b) Create the function that makes the test pass.

const combineArrays = (...array) => {
  // console.log(array)
  return [...new Set([].concat(...array))]
}


// testing more arrays 
// var testArray3 = [29, 7, 12, 5, 4, 3]
// var testArray4 = [7, 8, 2, 3, 1, 5, 4]
// console.log(combineArrays(testArray1, testArray2, testArray3, testArray4))
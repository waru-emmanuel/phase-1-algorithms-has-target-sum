function hasTargetSum(array, target) {
  // Write your algorithm here
  // for iteration through the pair of elements
   for (let i = 0; i < array.length; i++) {
       const firstDig = array[i];
        for (let j = i + 1; j< array.length; j++) {
           const secondDig = array[j];
           // checking if the sum of the current firstDigit nad secondDigit are equal to target
            if (firstDig + secondDig === target) {
              return true; // if found, true
            }
        }
   }
   return false; // if not found, false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  -write a for loop to iterate through the array elements
  -This will ensure that both piointer, i and j loop through to check the elements eqauling the target that is wanted
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

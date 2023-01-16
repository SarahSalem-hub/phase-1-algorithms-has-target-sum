function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = array[i] + array[j]
      
      if (sum === target){
        return true
      }
     
    }
    
  }
  return false
}

/* 
  Write the Big O time complexity of your function here:
  O(n^2): two loops iterates n times (array inputs)
*/

/* 
  Add your pseudocode here:
  loop over array (i item)
     loop over array starts at the 2nd index (j item)
       add i and j in sum variable
        check if sum is equal to target 
            return true
  return false otherwise
*/

/*
  Add written explanation of your solution here:
  - iterate over the array with 2 loops 
    to get the sum and compare it to the target 
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

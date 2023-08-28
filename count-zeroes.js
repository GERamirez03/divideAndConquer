/**
 * Given an array of 1s and 0s which has all 1s first followed by all 0s,
 * return the number of 0s in the array in O(logN) runtime complexity.
 */

function countZeroes(arr) {
    // BIG IDEA: Find indices where the 1s end/0s start and calculate the number of 0s
    // its basically binary search except we're searching for where the 1s end/0s start
    // and then doing some calculations once we have that information

    // set up pointers at start and end of arr
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    // instantiate a variable to hold the index of the first zero as undefined for now
    let firstZeroIdx;
    // console.log(firstZeroIdx);

    // LOOP
    // we know it's time to stop the loop once we either
    // a) have the index of the last 1/first 0 - ie, we know enough to calculate number of 0s; OR
    // b) we've exhausted the array - ie, there are no 0s

    // so, we are going to run a WHILE loop with the conditions being:
    // i) we still don't know the index of the first 0, AND
    // ii) we have yet to exhaust the array
    while(firstZeroIdx === undefined && leftIdx <= rightIdx) {

        // average and floor the indices for middle index
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

        // check the middle value of the array
        let middleVal = arr[middleIdx];

        console.log("Iteration Details", { firstZeroIdx, leftIdx, rightIdx, middleIdx, middleVal });

        // if middle value is 0, then start of 0s might be to the left
        if (middleVal === 0) {
            // IDEA: We're looking for the subarray [... 1,0, ...] if it exists.
            // So, if the middle value is a 0, then check the entry to the left of it. 

            // If the entry before this middle 0 is indeed a 1, then we have found the desired subarray.
            if (arr[middleIdx - 1] === 1 || middleIdx === 0) {
                // UPDATE: Need to account for when array is all 0s. middleIdx will eventually reach 0. Added condition OR middleIdx === 0.
                // So, we can proceed with calculating the number of 0s.
                firstZeroIdx = middleIdx;
            }

            // Otherwise, there are more 0s to the left of this middle 0.
            // So, focus on the left half of the array and repeat.
            // ie, change rightIdx to be middleIdx - 1
            else {
                rightIdx = middleIdx - 1;
            }

        }

        // else the middle value is 1, then start of 0s is definitely to the right (if there are any)
        else {
            // so, focus on the righthand half of the array
            // in other words, move the left idx to be the middle index + 1
            leftIdx = middleIdx + 1;
            // and repeat the loop with focus on the right half of the array
        }
    }

    // END LOOP
    // After this while loop has finished running, we will either have:
    // Case 1: firstZeroIdx is STILL undefined, but rightIdx is now to the left of leftIdx -> there are no 0s; OR
    // Case 2: firstZeroIdx is now defined, regardless of rightIdx & leftIdx -> there are 0s and we know enough to calculate the qty of 0s

    // Case 1
    if (firstZeroIdx === undefined) return 0;

    // Case 2
    else {
        // firstZeroIdx is defined, and
        // the number of 0s in the array will be given by
        // qtyOfZeros = ( array.length - 1 ) - (firstZeroIdx) + 1;
        // which simplifies to
        // qtyOfZeros = array.length - firstZeroIdx
        // This can also be thought of as firstZeroIdx = qtyOfOnes
        return arr.length - firstZeroIdx;
    }  
}

// NOTES:

        // [0, 1, 2, ..., firstZeroIdx -1, firstZeroIdx, 0, 0, ..., 0]
        // last element has index arr.length - 1

        // EXAMPLE:
        // if length 10 array and firstZeroIdx is 5:
        // arr.length - 1 = 9 and firstZeroIdx = 5 => there are 5 zeros in the array

        // EXAMPLE:
        // if length 15 array and firstZeroIdx is 3:
        // arr.length - 1 = 14 and firstZeroIdx = 3 => there are 12 zeros in the array

        // The general pattern is:
        // qtyOfZeros = ( array.length - 1 ) - (firstZeroIdx) + 1 = array.length - firstZeroIdx
        // since firstZeroIdx = qtyOfOnes

module.exports = countZeroes;
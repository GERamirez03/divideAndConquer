/**
 * Function that accepts an array of DISTINCT numbers
 * that have been SORTED in INCREASING order AND THEN
 * rotated COUNTER-CLOCKWISE (RIGHT) n times.
 * 
 * Returns n in O(logN) time.
 */

function findRotationCount(arr) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {

        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        /**
         * Finding the rotation count effectively boils down
         * to finding the index of the smallest element in
         * the array.
         * 
         * Since our array is first sorted in increasing order
         * and then rotated right n times, we can check if
         * the value left of middleVal is greater than than
         * middleVal.
         * 
         * If so, middleVal is the smallest number in the array
         * and hence middleIdx gives the number of right rotations.
         * 
         * Otherwise, middleVal is greater than the values to its
         * left, so the smallest value will be somewhere to the right.
         * In this case, update leftIdx to discard values outside of
         * the rightmost half of the array and iterate. 
         */

        if (arr[middleIdx - 1] > middleVal) {
            return middleIdx;
        } else {
            leftIdx = middleIdx + 1;
        }
    }
    // Exhausting the array implies the array was not rotated.
    return 0;
}

module.exports = findRotationCount
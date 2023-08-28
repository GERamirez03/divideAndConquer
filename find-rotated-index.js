/**
 * Function which accepts an array of
 * sorted numbers that has been rotated
 * and an integer num.
 * 
 * Returns the index of num in the array
 * in O(logN) time.
 * 
 * If num is not in the array, returns -1.
 */

function findRotatedIndex(arr, num) {

    /**
     * Helper function which returns the index of
     * the smallest number in a sorted-then-rotated array
     * in O(logN) time.
     */

    function findIndexOfSmallestNumber(arr) {

        let leftIdx = 0;
        let rightIdx = arr.length - 1;

        while (leftIdx <= rightIdx) {

            let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
            let middleVal = arr[middleIdx];

            if (arr[middleIdx - 1] > middleVal) return middleIdx;
            else if (arr[middleIdx + 1] < middleVal) return middleIdx + 1;
            else leftIdx = middleIdx + 1;
        }
        return 0;
    }

    /**
     * Helper function which performs a binary search for a specific
     * value num within a sorted and rotated array arr using provided
     * left and right indices to identify a subarray to search in.
     * 
     * Returns the index of num in the array in O(logN) time.
     * 
     * If num is not found within the bounds of the left and right indices
     * provided for arr, returns -1.
     */

    function subarrayBinarySearch(arr, num, leftIdx, rightIdx) {

        while (leftIdx <= rightIdx) {

            let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
            let middleVal = arr[middleIdx];

            if (middleVal > num) rightIdx = middleIdx -1 ;
            else if (middleVal < num) leftIdx = middleIdx + 1;
            else return middleIdx;
        }
        return -1;
    }

    /**
     * Begin by identifying the index of the smallest
     * number within the sorted and rotated array.
     * 
     * From there, we can perform binary searches within
     * the two subarrays of arr defined by the indices
     * [0, 1, ..., smallestNumIdx - 1] and
     * [smallestNumIdx, smallestNumIdx + 1, ..., arr.length - 1],
     * returning the index of num within arr as soon as we find it.
     * 
     * If neither subarray contains num, return -1.
     */

    let smallestNumIdx = findIndexOfSmallestNumber(arr);

    let leftHalfNumIdx = subarrayBinarySearch(arr, num, 0, smallestNumIdx - 1);
    if (leftHalfNumIdx != -1) return leftHalfNumIdx;

    let rightHalfNumIdx = subarrayBinarySearch(arr, num, smallestNumIdx, arr.length - 1);
    if (rightHalfNumIdx != -1) return rightHalfNumIdx;

    return -1;
}

module.exports = findRotatedIndex;
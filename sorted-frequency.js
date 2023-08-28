/**
 * Given a sorted array and a number,
 * return the frequency of that number
 * within the array in O(logn) time.
 */

function sortedFrequency(arr, num) {

    /**
     * Helper function which accepts a sorted array
     * and number and returns the index of the first
     * occurrence of that number within the array.
     */

    function findFirstIndexOfNum(arr, num) {

        let leftIdx = 0;
        let rightIdx = arr.length - 1;

        while(leftIdx <= rightIdx) {
            let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
            let middleVal = arr[middleIdx];

            if (middleVal > num) {
                rightIdx = middleIdx - 1;
            } else if (middleVal < num) {
                leftIdx = middleIdx + 1;
            } else {
                /* middleVal === num */
                if (arr[middleIdx - 1] < num || !arr[middleIdx - 1]) {
                    console.log(`The first index of ${num} in this array is: ${middleIdx}`);
                    return middleIdx;
                } else {
                    /* arr[middleIdx - 1] === num */
                    rightIdx = middleIdx - 1;
                }
            }
        }
        /* Finishing the while loop implies no such index exists. */
        return -1;
    }

    /**
     * Helper function which accepts a sorted array
     * and number and returns the index of the last
     * occurrence of that number within the array.
     */

    function findLastIndexOfNum(arr, num) {

        let leftIdx = 0;
        let rightIdx = arr.length - 1;

        while(leftIdx <= rightIdx) {
            let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
            let middleVal = arr[middleIdx];

            if (middleVal > num) {
                rightIdx = middleIdx - 1;
            } else if (middleVal < num) {
                leftIdx = middleIdx + 1;
            } else {
                /* middleVal === num */
                if (arr[middleIdx + 1] > num || !arr[middleIdx + 1]) {
                    console.log(`The last index of ${num} in this array is: ${middleIdx}`);
                    return middleIdx;
                } else {
                    /* arr[middleIdx + 1] === num */
                    leftIdx = middleIdx + 1;
                }
            }
        }
        /* Finishing the while loop implies no such index exists. */
        return -1;
    }

    let firstIdx = findFirstIndexOfNum(arr, num);
    if (firstIdx === -1) return 0;

    let lastIdx = findLastIndexOfNum(arr, num);

    return lastIdx - firstIdx + 1;
}

module.exports = sortedFrequency
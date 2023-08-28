/**
 * A function which accepts a sorted array and a num
 * and returns the floor of num within the array in O(logN) time.
 * 
 * The floor of a number x in an array is the largest element which is
 * smaller than or equal to x.
 * 
 * If the floor does not exist, returns -1.
 */

function findFloor(arr, num) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    let floor;

    while (leftIdx <= rightIdx) {

        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal > num) {
            rightIdx = middleIdx - 1;
        } else {
            
            /**
             * Here, middleVal <= num, so
             * middleVal is a floor candidate.
             */

            floor = middleVal;

            /**
             * To ensure that middleVal is THE floor of num in arr,
             * check values to the RIGHT of middleVal (sorted arr)
             * in case there is a bigger number that is still less
             * than or equal to middleVal. The largest such number
             * is THE floor of num within arr.
             */

            leftIdx = middleIdx + 1;
        }
    }
    return (floor) ? floor : -1;  
}

module.exports = findFloor;
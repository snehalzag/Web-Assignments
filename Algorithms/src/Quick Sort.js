//Quick Sort

/**
 * 
 * @param {number} arr          Array to be sorted 
 * @param {number} leftIndx     Left Index
 * @param {*} rightIndx         Right Index
 * @function swap               To swap two numbers
 */
function swap(arr, leftIndx, rightIndx){
    var temp = arr[leftIndx];
    arr[leftIndx] = arr[rightIndx];
    arr[rightIndx] = temp;
}

/**
 * 
 * @param {number} arr     Array to be sorted 
 * @param {number} left    Left Pointer
 * @param {*} right        Right Pointer
 * @function part          To divide array into parts based on pivot element 
 */
function part(arr, left, right) {
    var pivot   = arr[Math.floor((right + left) / 2)],   i = left,    j = right;     //(middle element , left pointer  , right pointer)
        console.log("Pivot="+pivot)
    /**
     * @while   For Array Partition till all left element are smaller than right elements
     */
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            /**
             * @function swap       Calling swap function to swap the elements to correct the order
             */
            swap(arr, i, j); 
            i++;
            j--;
        }
    }
    return i;
}

/**
 * 
 * @param {number} arr     Array to be sorted
 * @param {*} left         Left index
 * @param {*} right        Right Index
 * @function quickSort     A recursive function To sort the array
 */
function quickSort(arr, left, right) {
    var index;
    if (arr.length > 1) 
    {
        /**
         * @type {number} index     Index returned from part function
         */
        index = part(arr, left, right);
        console.log(arr);

        if (left < index - 1) { 
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}


var arr = [5,3,7,6,2,9];
console.log(arr);
/**
 * @description     Calling function quickSort
 */
var sortedArray = quickSort(arr, 0, arr.length - 1);
console.log("Sorted Array is "+sortedArray);
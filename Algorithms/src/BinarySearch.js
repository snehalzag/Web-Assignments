//Binary Search function  


/**
 * 
 * @param {number} arr      The array
 * @param {number} value    The value to be searched
 * @function binary_search  This function does binary search on the array  
 */

function binary_search(arr, value)
{
  let first=0;
  let last=arr.length-1;
  let mid= 0;
   
  while(first<=last)
  {
    /**
     * @type  {number} mid    Fetching  the middle number of array
     */
    mid=Math.floor((first+last)/2);

    if(arr[mid]==value)
    {
      /**
       * @return {number}     Return middle number if value is equal to middle number
       */
      return arr[mid];
    }
    else if(value < arr[mid])
    {
      /**
       * @description search in first half of array
       */
      last= mid - 1;
    }
    else{
      /**
       * @description search in second half of array
       */
      first= mid + 1;
    }
  }
  return -1;

}

/**
 * @type  {number} array   Array to be passed
 * @type  {number} input   inputed value to be searched
 */
let array =[1,5,45,8,63,20,27,91,31,5,2];
let input=20;


/**
 * @type {number}  Sorted Array
 */
let sortedArray = array.sort(function(a,b) {return a-b});
console.log(sortedArray);


/**
 * @type {number} result  To get the returned value from function
 */
let result= binary_search(sortedArray, input);
if(result == -1)
{
  console.log(input+ " Not Found in Array!");
}
else
{
  console.log(result+ " Found in Array!");
}

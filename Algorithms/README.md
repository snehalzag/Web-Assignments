# Understanding the Algorithms of: 
1. Binary Search:
   
   Searching a number in a given array using following steps:
   1. Find the mid index of the array (Array should be sorted)
   2. If element is present at mid, return True 
   3. Else look in left or right half accordingly (Set left/right using mid-1/mid+1)
   
2. Quick Sort

   Sorting the given array using following steps:
   1. Find the pivot element of the array 
   2. Divide the whole array into parts using pivot
   3. Swap the numbers accordingly among the parts
   4. Repeat the process till all the elements are in order
   
3. String Reverse
    Reversing  a String using reverse() method
    
Adding the Code-Documentation using ESDOC 

Steps: 
1. Install Esdoc (npm install esdoc)
2. Adding the configuration in esdoc.json as
  {
    "source": "./src",
    "destination": "./docs",
    "plugins": [{"name": "esdoc-standard-plugin"}]
  }
  3. Add comments using the format
  4. Run (npm run esdoc)

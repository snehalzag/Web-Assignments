//String Reverse


/**
 * 
 * @param {String} str      The String to be reversed 
 */
function reverseString(str) {
    /**
     * @type {String} spiltStr       String with seperated letters using spilt() method
     */
    var spiltStr = str.split("");  

    /** 
     * @type {String} reverseStr     Reveresed String using reverse() method
     */
    var reverseStr = spiltStr.reverse(); 
   
    /**
     * @type {String} joinStr        Join all letters using join() method
     */
    var joinStr = reverseStr.join(""); 
        
    /**
     * @return {String}             Returns reversed string
     */
    return joinStr; 
}
 

/**
 * @type {String}               Variables to pass String to be reversed
 */
var s = "Northeastern University"
var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

console.log(s); 
console.log("Reversed Output: "+reverseString(s));

console.log(r); 
console.log("Reversed Output: "+reverseString(r));

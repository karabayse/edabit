// Write a function that returns true if an object is empty, and false otherwise.
function isEmpty(obj) {
  for(var key in obj) {
       if(obj.hasOwnProperty(key))
           return false;
   }
  return true;
}

isEmpty({}) // ➞ true

isEmpty({ a: 1 }) // ➞ false

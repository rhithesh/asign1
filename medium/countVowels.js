/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
   const h= str.toLowerCase()
   var count =0

   for(var i=0;i<h.length;i++){
    if(h[i]=="a"||h[i]=="e"||h[i]=="i"||h[i]=="o"||h[i]=="u")
    count =count+1
   }
   return count

}

module.exports = countVowels;
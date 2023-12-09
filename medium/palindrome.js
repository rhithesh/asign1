/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  const o=str.replace(/[^a-zA-Z0-9]/g, '');

var h=""

  for(a=o.length-1;a>=0;a--){

    h=h+o[a]


  }

  console.log(h,"     ",o)


  if(h.toLowerCase()===o.toLowerCase()){
    return true;

  }
  else{
    return false
  }
}


console.log(isPalindrome("Able, was I ere I saw Elba!"))
module.exports = isPalindrome;

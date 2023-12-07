/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    var max=-10000
    if(numbers.length<=0){

        return undefined
    }

    for(var a=0;a<numbers.length;a++){

        if(max<numbers[a]){
            max=numbers[a]
        }

    }

    console.log(max)

    return max
    
}


findLargestElement([-3.5, -7.2, -2.1, -9.8, -1.9])

module.exports = findLargestElement;
const _ = {
    clamp (number, lower, upper) {
      let lowerClampedValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue; 
    }, 
    inRange (number, start, end) { 
        if (!end){
        end = start;
        start = 0;
      } else if (end < start){
        const temp = end;
        end = start; 
        start = temp; 
      }
     let isInRange = (number >= start && number < end) ? true : false; 
     return isInRange;
    }, 
    words (str){
      let result = str.split(" ");
      return result;
    }, 
    pad (str, length){
      if (str.length >= length){
        return str;
      }; 
      let startPaddingLength = Math.floor((length - str.length) / 2);
      let endPaddingLength = length - str.length - startPaddingLength;
      let paddedString = " ".repeat(startPaddingLength)+ str + " ".repeat(endPaddingLength);
      return paddedString; 
     },
     has (obj, key){
       let hasValue = false; 
       if (obj[key] === undefined){
         hasValue = false;
       }else {
         hasValue = true;
       }
       return hasValue;
     },
     invert (obj){
       let reverse = {};
       for (let elem in obj){
         let originalVal = obj[elem];
         reverse[originalVal] = elem;
       }
       return reverse;
     },
     findKey (obj, func){
       for (let elem in obj){
         if (func(obj[elem])){
           return elem;
         } 
       } return undefined;
     },
     drop (arr, num){ 
       if (!num){
         arr.shift();
         return arr;
       } 
       let newArr = arr.slice(num);
       return newArr;
     },
     dropWhile(arr, func){
       let dropNumber = arr.findIndex((elem, index) => !func(elem, index, arr));
       let droppedArray = this.drop(arr, dropNumber);
       return droppedArray;
       }, 
       chunk (arr, size){
         if (!size){
           size = 1;
         }
         let a = [];
         for (let i=0; i < arr.length; i += size){
           let c = arr.slice(i, i+size);
           a.push(c);
         }
         return a;
       }
  };
  
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;
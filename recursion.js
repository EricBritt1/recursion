/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  //base case
  // I originally the I should return zero like in the sum problems. Why do we return 1 here? I thought we only returned 'return' so the base case could break the recursive process. But when I returned just 'return' nothing happened. 
  if(i === nums.length) return 1
  //normal case
  return nums[i] * product(nums, i+1)
}


/** longest: return the length of the longest word in an array of words. */

// My way
function longest(words, i=0, longestSoFar=0) {
  // base case
  if(i === words.length) return longestSoFar
  //normal case
  if (words[i].length > longestSoFar) {
    longestSoFar = words[i].length
    return longest(words, i+1, longestSoFar)
  } else {
    return longest(words, i+1, longestSoFar)
  }
}

// A neater way
function longest_neat(words, i=0, longestSoFar=0) {
  if(i === words.length) return longestSoFar
  longestSoFar = Math.max(words[i].length, longestSoFar)
  return longest_neat(words, i+1, longestSoFar)
}




/** everyOther: return a string with every other letter. */

// My version
function everyOther(str, i=0) {
  if(i >= str.length) return ''
  return str[i] + everyOther(str, i+2)
}



/** isPalindrome: checks whether a string is a palindrome or not. */

// Be sure to ask Kwame why this continues to return false. I'd like to get figure out how to get this to work because it's much less writting than the next method I tried

function isPalindrome(str, i=str.length-1, reversed_word="") {
  if(i === -1) return (str === reversed_word)
  return reversed_word + str[i] + isPalindrome(str, i-1, reversed_word)
}

//console.log(isPalindrome_my_attempt_1("tacocat"))



/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(i === arr.length) return -1
  if(arr[i] === val) {
    return i
  } else {
    return findIndex(arr, val, i+1)
  }
}



/** revString: return a copy of a string, but in reverse. */


function revString(str, i=0, reversed_word="") {
if (str.length === reversed_word.length) return reversed_word
reversed_word += str[str.length-1-i]
return revString(str, i+1, reversed_word)
}



/** gatherStrings: given an object, return an array of all of the string values. */
// Didn't know how to do this one so I referred to solution. Is this still considered recursion though? I thought recursion is when you call a function within itself. This isn't the case here. 
function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}
/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

//Don't look at solution and save for call with Kwame since we struggle with binarySearch. 
function binarySearch(arr, val) {


}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};

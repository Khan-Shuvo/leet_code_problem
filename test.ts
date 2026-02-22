// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

// The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored

//  solution 
var removeDuplicates = function (nums: number[]): number {
  if (nums.length == 0)
    return 0
  let j = 0
  for (let i = 1; i <= nums.length - 1; i++) {
    if (nums[j] !== nums[i]) {
      j++
      nums[j] = nums[i]
    }
  }
  return j + 1
};



// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

//  solution

function removeElement(nums: number[], val: number): number {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i]
      j++
    }
  }
  return j
};



// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// solution

function longestCommonPrefix(str: string[]): string {
  if (str.length === 0) return ''

  let prefix = str[0]

  for (let i = 1; i < str.length; i++) {
    while (str[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1)
      if (prefix === "") return ''
    }
  }
  return prefix
}

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// solution 

function createCounter(n: number): () => number {
  let count = n
  return function counter() {
    return count++
  }
}


// Given an integer x, return true if x is a palindrome, and false otherwise.

// solution

function isPalindrome(x: number): boolean {
  let temp = x
  let rev = 0
  if (x < 0) return false
  while (temp > 0) {
    let digit = temp % 10
    rev = rev * 10 + digit
    temp = Math.floor(temp / 10)
  }
  if (x === rev) return true
  else return false
};

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

function strStr(haystack: string, needle: string): number {
  let output = haystack.indexOf(needle)
  return output
};

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.


function searchInsert(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if(nums[mid] === target){ 
      return mid
    }else if(nums[mid]< target){
      left = mid + 1
    }else{
      right = mid - 1
    }
  }
  return left
}
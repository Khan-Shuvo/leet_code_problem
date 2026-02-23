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

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return left
}


function lengthOfLastWord(s: string): number {
  let str = s.trim().split(' ')
  return str[str.length - 1].length

};


// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++
      return digits
    }
    digits[i] = 0
  }
  digits.unshift(1)
  return digits
};


// Given two binary strings a and b, return their sum as a binary string.

function addBinary(a: string, b: string): string {
  let i: number = a.length - 1
  let j: number = b.length - 1
  let carry: number = 0
  let result: string = ''

  while (i >= 0 || j >= 0 || carry != 0) {
    let sum = carry
    if (i >= 0) {
      sum += Number(a[i])
      i--
    }
    if (j >= 0) {
      sum += Number(b[j])
      j--
    }
    let digit = sum % 2
    carry = Math.floor(sum / 2)
    result = digit + result
  }
  return result
};


// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

function mySqrt(x: number): number {
  if (x < 2)
    return x
  let right: number = x
  let left: number = 1
  let answer: number = 0

  while (left <= right) {
    let mid = Math.floor((right + left) / 2)
    if (mid <= x / mid) {
      answer = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return answer
};


// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbStairs(n: number): number {
  if (n <= 2) return n

  let first: number = 1
  let second: number = 2

  for (let i = 3; i <= n; i++){
    let current = first + second

    first = second
    second = current
  }
  return second
};
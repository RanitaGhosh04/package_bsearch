// Function 1: Binary search in a sorted array
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Return index of the target element
      } else if (arr[mid] < target) {
        left = mid + 1; // Search in the right half
      } else {
        right = mid - 1; // Search in the left half
      }
    }
  
    return -1; // Return -1 if target is not found
  }
  
  // Function 2: Check if an array is sorted in ascending order
  function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  
  // Function 3: Find the first occurrence of a target element in a sorted array
  function binarySearchFirst(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        result = mid; // Update result and continue searching in the left half
        right = mid - 1;
      } else if (arr[mid] < target) {
        left = mid + 1; // Search in the right half
      } else {
        right = mid - 1; // Search in the left half
      }
    }
  
    return result;
  }
  
  // Function 4: Find the last occurrence of a target element in a sorted array
  function binarySearchLast(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        result = mid; // Update result and continue searching in the right half
        left = mid + 1;
      } else if (arr[mid] < target) {
        left = mid + 1; // Search in the right half
      } else {
        right = mid - 1; // Search in the left half
      }
    }
  
    return result;
  }
  
  // Function 5: Check if an array contains a target element using binary search
  function contains(arr, target) {
    return binarySearch(arr, target) !== -1;
  }
  
  module.exports = {
    binarySearch,
    isSorted,
    binarySearchFirst,
    binarySearchLast,
    contains
  };
  
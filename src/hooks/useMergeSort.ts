import { useState, useEffect } from "react";

const useMergeSort = (inputArray: number[]): number[][][] => {
  // Custom hook to perform merge sort and track the steps
  const [steps, setSteps] = useState<number[][][]>([]); // State to store the steps of the merge sort process

  useEffect(() => {
    const mergeSort = (arr: number[]): number[] => {
      // Recursive function to perform merge sort

      if (arr.length <= 1) return arr; // Base case: if the array has 1 or no elements, it's already sorted

      const mid = Math.floor(arr.length / 2); // Find the middle index of the array
      // Recursively sort the left and right halves
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));

      // Merge the sorted halves and track the step
      const merged = merge(left, right);
      setSteps((prev) => [...prev, [left, right, merged]]);

      return merged;
    };

    const merge = (left: number[], right: number[]): number[] => {
      // Function to merge two sorted arrays into one sorted array
      let result: number[] = [];
      let i = 0;
      let j = 0;

      while (i < left.length && j < right.length) {
        // Loop through both arrays and merge them in sorted order
        if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
        } else {
          result.push(right[j]);
          j++;
        }
      }

      return result.concat(left.slice(i)).concat(right.slice(j)); // Concatenate any remaining elements from both arrays
    };

    setSteps([]); // Reset steps when a new array is provided

    mergeSort(inputArray); // Call mergeSort function with the input array
  }, [inputArray]);

  // Return the steps array
  return steps;
};

// Export the useMergeSort hook as the default export
export default useMergeSort;

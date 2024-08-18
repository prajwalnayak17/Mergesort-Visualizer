import { useState, useEffect } from 'react';

const useMergeSort = (inputArray: number[]): number[][][] => {
  const [steps, setSteps] = useState<number[][][]>([]);

  useEffect(() => {
    const mergeSort = (arr: number[]): number[] => {
      if (arr.length <= 1) return arr;

      const mid = Math.floor(arr.length / 2);
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));

      const merged = merge(left, right);
      setSteps(prev => [...prev, [left, right, merged]]);

      return merged;
    };

    const merge = (left: number[], right: number[]): number[] => {
      let result: number[] = [];
      let i = 0;
      let j = 0;

      while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
        } else {
          result.push(right[j]);
          j++;
        }
      }

      return result.concat(left.slice(i)).concat(right.slice(j));
    };

    // Reset steps when new array is provided
    setSteps([]);
    mergeSort(inputArray);
  }, [inputArray]);

  return steps;
};

export default useMergeSort;

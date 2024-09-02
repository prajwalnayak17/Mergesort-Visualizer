import React, { useState } from 'react'; 
import InputArray from './InputArray'; 
import MergeStep from './MergeStep'; 
import useMergeSort from '../hooks/useMergeSort'; 


const SortVisualizer: React.FC = () => {// define the SortVisualizer functional component
  
  const [array, setArray] = useState<number[]>([]);// state to store the input array
  
  const steps = useMergeSort(array);// get the steps of the merge sort process using the custom hook

  
  const handleArraySubmit = (input: number[]) => {// handler function to update the array state when a new array is submitted
    setArray(input);
  };

  return (
    <div>
      <InputArray onSubmit={handleArraySubmit} />
      {/*  render the initial array if it has elements */}
      {array.length > 0 && (
        <div className="initial-array">
          <strong>Initial Input:</strong>
          <div className="array-box">
            {/* Map over the array and render each number as a span element */}
            {array.map(num => (
              <span key={num} className="array-item">{num}</span>
            ))}
          </div>
        </div>
      )}
      {/* conditional render the merge sort steps if there are any */}
      {steps.length > 0 && (
        <div>
          {/* map over the steps and render a MergeStep component for each step */}
          {steps.map((step, index) => (
            <MergeStep key={index} step={step} stepIndex={index} />
          ))}
        </div>
      )}
    </div>
  );
};

// Export the SortVisualizer component as the default export
export default SortVisualizer;
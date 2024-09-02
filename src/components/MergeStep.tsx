import React from 'react';
import './MergeStep.css';

// Define the props interface for the MergeStep component
interface MergeStepProps {
  step: number[][]; 
  stepIndex: number; // The index of the current step
}

// Define the MergeStep functional component
const MergeStep: React.FC<MergeStepProps> = ({ step, stepIndex }) => {
  return (
    <div className="merge-step">
      {/* Display the step number */}
      <div className="step-label">
        Step {stepIndex + 1}:
      </div>
      <div className="arrays">
        {/* Display the first two arrays in the step */}
        {step.slice(0, 2).map((arr, idx) => (
          <div key={idx} className="array-box">
            {arr.map(num => (
              <span key={num} className="array-item">{num}</span>
            ))}
          </div>
        ))}
      </div>
      {/* Display the merged array if it exists */}
      {step[2] && (
        <div className="merged-array">
          <div className="array-box">
            {step[2].map(num => (
              <span key={num} className="array-item">{num}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MergeStep;
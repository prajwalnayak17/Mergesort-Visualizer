
import React from 'react';
import './MergeStep.css';

interface MergeStepProps {
  step: number[][];
  stepIndex: number;
}

const MergeStep: React.FC<MergeStepProps> = ({ step, stepIndex }) => {
  return (
    <div className="merge-step">
      <div className="step-label">
        Step {stepIndex + 1}:
      </div>
      <div className="arrays">
        {step.slice(0, 2).map((arr, idx) => (
          <div key={idx} className="array-box">
            {arr.map(num => (
              <span key={num} className="array-item">{num}</span>
            ))}
          </div>
        ))}
      </div>
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

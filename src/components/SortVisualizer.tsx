// import React, { useState } from 'react';
// import InputArray from './InputArray';
// import MergeStep from './MergeStep';
// import useMergeSort from '../hooks/useMergeSort';

// const SortVisualizer: React.FC = () => {
//   const [array, setArray] = useState<number[]>([]);
//   const steps = useMergeSort(array);

//   const handleArraySubmit = (input: number[]) => {
//     setArray(input);
//   };

//   return (
//     <div>
//       <InputArray onSubmit={handleArraySubmit} />
//       {array.length > 0 && (
//         <div className="initial-array">
//           <strong>Initial Input:</strong>
//           <div className="array-box">
//             {array.map(num => (
//               <span key={num} className="array-item">{num}</span>
//             ))}
//           </div>
//         </div>
//       )}
//       {steps.length > 0 && (
//         <div>
//           {steps.map((step, index) => (
//             <MergeStep key={index} step={step} stepIndex={index} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SortVisualizer;


import React, { useState } from 'react';
import InputArray from './InputArray';
import MergeStep from './MergeStep';
import useMergeSort from '../hooks/useMergeSort';

const SortVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const steps = useMergeSort(array);

  const handleArraySubmit = (input: number[]) => {
    setArray(input);
  };

  return (
    <div>
      <InputArray onSubmit={handleArraySubmit} />
      {array.length > 0 && (
        <div className="initial-array">
          <strong>Initial Input:</strong>
          <div className="array-box">
            {array.map(num => (
              <span key={num} className="array-item">{num}</span>
            ))}
          </div>
        </div>
      )}
      {steps.length > 0 && (
        <div>
          {steps.map((step, index) => (
            <MergeStep key={index} step={step} stepIndex={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SortVisualizer;

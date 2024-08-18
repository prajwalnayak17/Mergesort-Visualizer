import React, { useState } from 'react';

interface InputArrayProps {
  onSubmit: (input: number[]) => void;
}

const InputArray: React.FC<InputArrayProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const numbers = inputValue.split(',').map(Number);
    if (numbers.every(num => !isNaN(num))) {
      onSubmit(numbers);
    } else {
      alert('Please enter a valid comma-separated list of numbers.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter numbers separated by commas"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InputArray;

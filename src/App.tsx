import React from 'react';
import './styles/App.css';
import SortVisualizer from './components/SortVisualizer';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Merge Sort Visualizer</h1>
      <SortVisualizer />
    </div>
  );
};

export default App;

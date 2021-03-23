import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">counter</header> */}
      <Counter value={ 0 } />
    </div>
  );
}

export default App;

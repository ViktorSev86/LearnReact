import './App.css';
import React, {useState} from 'react';
import Counter from './Counter.js';

function App() {
  let [maxTest, setMaxTest] = useState(10);
  let setMaxTest5 = () => setMaxTest(5);
  return (
    <div className="App">
      <h2>Hello, World!</h2>
        <hr/>
            <h3>Func min = 2, max = 10</h3>
            <Counter min={2} max={10}/>
            <h3>Func min = default, max = 10</h3>
            <Counter max={maxTest}/>
        <hr/>
        <button type="button" onClick={setMaxTest5}>set 5</button>
        <div>
            Text
        </div>
    </div>
  );
}

export default App;

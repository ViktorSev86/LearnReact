import './App.css';
import Counter from './Counter.js';

function App() {
  return (
    <div className="App">
      <h2>Hello, World!</h2>
        <hr/>
            <h3>Func min = 2, max = 10</h3>
            <Counter min={2} max={10}/>
            <h3>Func min = default, max = 10</h3>
            <Counter max={10}/>
        <hr/>
        <div>
            Text
        </div>
    </div>
  );
}

export default App;

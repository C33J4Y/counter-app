import {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>People Counter</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;

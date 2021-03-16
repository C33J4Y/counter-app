import {useState} from 'react';
import './App.css';

function MaxCapacity(){
  return <h1 style={{color: "red"}}>Store at Max Capacity</h1>;     
}

function App() {
  const [count, setCount] = useState(0);

  if(count >= 10){
    return (
      <div>
        <MaxCapacity/>
        <button onClick={count > 0 ? () => setCount(count - 1) : () => setCount (0)}>Decrease</button>
        </div>  
      
    );
  }

  if(count < 10){
    return (
      <div>
        <h1>People Counter</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <p>{count}</p>
        <button onClick={count > 0 ? () => setCount(count - 1) : () => setCount(0)}>Decrease</button>
      </div>
    );
  }
}

export default App;


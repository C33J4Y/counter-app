import {useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add'
import MinusIcon from '@material-ui/icons/Remove';

function MaxCapacity(){
  return <h1>Store at Max Capacity</h1>;     
}

function App() {
  const [count, setCount] = useState(0);

  if(count >= 10){
    return (
      <div>
       <script>{document.body.style = 'background: red'}</script>
        <MaxCapacity/>
        <Button variant="contained" color="secondary" startIcon={<MinusIcon/>} size="Large" onClick={count > 0 ? () => setCount(count - 1) : () => setCount (0)}>Decrease</Button>
      </div>  
    );
  }

  if(count < 10){
    return (
      <div>
          <script>{document.body.style = "background: green;"}</script>
          <h1>People Counter</h1>
          <Button variant="contained" color="primary" startIcon={<AddIcon/>} size="large" onClick={() => setCount(count + 1)}>Increase</Button>
          <p>{count}</p>
        <Button variant="contained" color="secondary" startIcon={<MinusIcon/>} size="large" onClick={count > 0 ? () => setCount(count - 1) : () => setCount(0)}>Decrease</Button>
      </div>
    );
  }
}

export default App;


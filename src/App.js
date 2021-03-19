import {useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add'
import MinusIcon from '@material-ui/icons/Remove';

//TODO: Change screen to green while count is 0 >= && <=10
//TODO: Change screen to red when it goes above the number of people allowed
function MaxCapacity(){
  return <h1 style={{color: "red"}}>Store at Max Capacity</h1>;     
}

function App() {
  const [count, setCount] = useState(0);

  if(count >= 10){
    return (
      <div>
        <MaxCapacity/>
        <Button variant="contained" color="secondary" startIcon={<MinusIcon/>} onClick={count > 0 ? () => setCount(count - 1) : () => setCount (0)}>Decrease</Button>
      </div>  
    );
  }

  if(count < 10){
    return (
      <div>
        <h1>People Counter</h1>
          <Button variant="contained" color="primary" startIcon={<AddIcon/>} onClick={() => setCount(count + 1)}>Increase</Button>
          <p>{count}</p>
        <Button variant="contained" color="secondary" startIcon={<MinusIcon/>} onClick={count > 0 ? () => setCount(count - 1) : () => setCount(0)}>Decrease</Button>
      </div>
    );
  }
}

export default App;


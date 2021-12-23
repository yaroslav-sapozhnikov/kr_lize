import './App.css';
import {useState} from "react";

function App() {

  const [number, setNumber] = useState('')
  const [output, setOutput] = useState('')

  const multiplication = () => {
    setOutput(parseInt(number) * 2);
  }

  const pow = () => {
    return setOutput(parseInt(number) * number);
  }

  return (
    <div>
      <input value={number} onChange={e => setNumber(e.target.value)}/>
      <button onClick={pow}>^2</button>
      <button onClick={multiplication}>x2</button>
      {output}
    </div>
  );
}

export default App;

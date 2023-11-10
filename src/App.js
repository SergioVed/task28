import './App.css';
import { useState } from 'react';

function App() {

  const [color, setColor] = useState('red')
  function changeColor() {
    if (color === 'red') {
      setColor('yellow')
    } else if(color === 'yellow'){
      setColor('green')
    } else if(color === 'green'){
      setColor('red')
    }
  }
  return (
    <>
      <button onClick={changeColor} id='button'>Change color</button>
      <div id='div' className={color}></div>
    </>
  );
}

export default App;
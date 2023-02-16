import React from 'react';
import './App.css';
import Form from './componentss/Form';
import { useForm } from 'react-hook-form';



function App() {
  return (
    <div className="App">
      <div className='textArea'>
        <h1>Learn to code by watching others</h1>
        <p>
        See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. 
        </p>
      </div>

    <Form/>

    </div>
  );
}

export default App;

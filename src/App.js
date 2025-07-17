import React, { useEffect, useState } from 'react';
import './App.css';
const image = require('./assest/loog.png'); // Adjust the path if needed

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <>
      <div className='header'>
        <img src={image} alt="Library Logo" className='logo' />
        <a href="#" className='link'>Library</a>
        <a href="#" className='link'>Home</a>
        <a href="#" className='link'>About</a>
        <a href="#" className='link'>Contact</a>
      </div>

      <div className='container'>
        
          <h1 className="background-text">Library </h1>
          <h1 className="foreground-text">Manish</h1>
       

        
        <p>{message}</p>
      </div>
      {/* Remove the uper-container or use it for something else if you want */}
    </>
  );
}

export default App;

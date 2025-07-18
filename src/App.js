import React, { useEffect, useState } from 'react';
import './App.css';
const image = require('./assest/loog.png');
const img = require('./assest/book.png'); // Adjust the path if needed
const moon = require('./assest/Moon.png'); // Adjust the path if needed

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
          
       

        
        {/* <p>{message}</p> */}
      </div>
      {/* Remove the uper-container or use it for something else if you want */}

      <div className='moon'>

        <img src={moon} alt="MOON H " className='cha' />
      </div>

      <div className='second-page'>
        <h1 className='second-page-text'></h1>
        <p className='sec-tital'>A library is a collection of books, and possibly other materials and media, that is accessible for use by its members and members of allied institutions. Libraries provide physical (hard copies) or digital (soft copies) materials, and may be a physical location, a virtual space, or both.
        </p>
        <img src={img} alt="Library Logo" className='logo' />
      </div>
          
    </>
  );
}

export default App;

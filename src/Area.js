import React, { useState } from 'react';

import './Area.css';

import { Link } from 'react-router-dom';

const Area = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (first + second + third === 180) {
      setOutput(' These angles can make a triangle');
    } else {
      setOutput('These angles does not make a triangle');
    }
  };

  return (
    <div className='Area'>
      <h1 className='Area-heading'>
        Enter the angles in below input boxes and we will tell you if those
        angles make a Triangle
      </h1>
      <Link className='Area-back' to='/'>
        Go Back
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type='number'
          onChange={(evt) => setFirst(Number(evt.target.value))}
        />
        <input
          type='number'
          onChange={(evt) => setSecond(Number(evt.target.value))}
        />
        <input
          type='number'
          onChange={(evt) => setThird(Number(evt.target.value))}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
      <div className='Area-output'>
        {output === '' ? <h3>Output will be shown here</h3> : <h3>{output}</h3>}
      </div>
    </div>
  );
};

export default Area;

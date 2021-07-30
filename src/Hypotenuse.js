import React, { useState } from 'react';

import './Hypotenuse.css';

import { Link } from 'react-router-dom';

const Hypotenuse = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [c, setC] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let hypo = first * first + second * second;
    setC(Math.sqrt(hypo));
  };
  return (
    <div>
      <div className='Hypotenuse'>
        <h1 className='Hypotenuse-heading'>
          Enter the lengths of sides of right angle triangle abc
        </h1>
        <Link to='/'>Go Back</Link>
        <div className='Hypotenuse-image'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rtriangle.svg/1200px-Rtriangle.svg.png' />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type='number'
            onChange={(evt) => setFirst(Number(evt.target.value))}
          />
          <input
            type='number'
            onChange={(evt) => setSecond(Number(evt.target.value))}
          />
          <br />
          <button type='submit'>Submit</button>
        </form>
        <div className='Hypotenuse-output'>
          <h3>{c === '' ? 'C= √a2+b' : 'c = ' + c}</h3>
        </div>
      </div>
    </div>
  );
};

export default Hypotenuse;

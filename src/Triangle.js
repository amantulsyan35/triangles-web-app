import React from 'react';

import './Triangle.css';

import { Link } from 'react-router-dom';

const Triangle = () => {
  return (
    <div className='Triangle'>
      <h1>Welcome to Fun with Triangles</h1>

      <div className='Triangle-1'>
        <div className='Triangle-item-1'>
          <Link to='/area'>
            <h3>Area of Triangles</h3>
          </Link>
        </div>
        <div className='Triangle-item-2'>
          <Link to='/hypotenuse'>
            <h3>Check Hypotenuse</h3>
          </Link>
        </div>
      </div>
      <div className='Triangle-2'>
        <div className='Triangle-item-3'>
          <Link to='/calculate'>
            <h3>Calculate Area</h3>
          </Link>
        </div>
        <div className='Triangle-item-4'>
          <Link to='/quiz'>
            <h3>Take a Quiz</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Triangle;

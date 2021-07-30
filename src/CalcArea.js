import React, { useState } from 'react';

import './CalcArea.css';

import { Link } from 'react-router-dom';

const CalcArea = () => {
  const [option, setOption] = useState(0);
  const [base, setBase] = useState();
  const [height, setHeight] = useState();
  const [area, setArea] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [deg, setDeg] = useState(0);
  // const [second, setSecond] = useState();
  // const [third, setThird] = useState();

  const handleSubmit1 = (evt) => {
    evt.preventDefault();
    let a = 0.5 * height * base;
    setArea(a);
  };

  const handleSubmit2 = (evt) => {
    evt.preventDefault();
    if (a + b > c && b + c > a && a + c > b) {
      const s = (a + b + c) / 2;
      const x = Math.sqrt(s * (s - a) * (s - b) * (s - c));
      setArea(x);
    }
  };

  const handleSubmit3 = (evt) => {
    evt.preventDefault();
    const x = (b * deg * Math.sin((a * Math.PI) / 180)) / 2;
    setArea(x);
  };

  return (
    <div className='CalcArea'>
      <h1 className='Calculate-heading'>
        Select an option below as per the data you have for a triangle
      </h1>

      <Link to='/'>
        <button className='back'>Go back</button>
      </Link>
      <form>
        <div className='Form-container'>
          <div className='Form-group'>
            <input
              type='radio'
              name='area'
              value={1}
              onChange={(evt) => setOption(Number(evt.target.value))}
            />
            <label> If you have base and height length</label>
          </div>
          <div className='Form-group'>
            <input
              type='radio'
              name='area'
              value={2}
              onChange={(evt) => setOption(Number(evt.target.value))}
            />
            <label> If you have length of 3 sides</label>
          </div>
          <div className='Form-group'>
            <input
              type='radio'
              name='area'
              value={3}
              onChange={(evt) => setOption(Number(evt.target.value))}
            />
            <label>If you have length of 2 sides and included angle</label>
          </div>
        </div>
      </form>

      {option === 1 && (
        <div>
          <form onSubmit={handleSubmit1}>
            <div className='Render-form'>
              <div className='Form-group-render'>
                <label>Base</label>
                <input
                  type='number'
                  onChange={(evt) => setBase(Number(evt.target.value))}
                />
              </div>
              <div className='Form-group-render'>
                <label>Height</label>
                <input
                  type='number'
                  onChange={(evt) => setHeight(Number(evt.target.value))}
                />
              </div>
              <button type='submit' className='Calculate-button'>
                Calculate
              </button>
            </div>
          </form>
          <div className='Calculate-output'>
            <h3>{area === 0 ? 'Area= 1/2*base*height' : 'Area = ' + area}</h3>
          </div>
        </div>
      )}
      {option === 2 && (
        <div>
          <form onSubmit={handleSubmit2}>
            <div className='Render-form'>
              <div className='Form-group-render'>
                <label>a</label>
                <input
                  type='number'
                  onChange={(evt) => setA(Number(evt.target.value))}
                />
              </div>
              <div className='Form-group-render'>
                <label>b</label>
                <input
                  type='number'
                  onChange={(evt) => setB(Number(evt.target.value))}
                />
              </div>
              <div className='Form-group-render'>
                <label>c</label>
                <input
                  type='number'
                  onChange={(evt) => setC(Number(evt.target.value))}
                />
              </div>
              <button className='Calculate-button'>Calculate</button>
            </div>
          </form>
          <div className='Calculate-output'>
            <h3>{area === 0 ? 'Area= √s(s-a)(s-b)(s-c)' : 'Area = ' + area}</h3>
          </div>
        </div>
      )}
      {option === 3 && (
        <div>
          <form onSubmit={handleSubmit3}>
            <div className='Render-form'>
              <div className='Form-group-render'>
                <label>a</label>
                <input
                  type='number'
                  onChange={(evt) => setA(Number(evt.target.value))}
                />
              </div>
              <div className='Form-group-render'>
                <label>b</label>
                <input
                  type='number'
                  onChange={(evt) => setB(Number(evt.target.value))}
                />
              </div>
              <div className='Form-group-render'>
                <label> ∠A(deg)</label>
                <input
                  type='number'
                  onChange={(evt) => setDeg(Number(evt.target.value))}
                />
              </div>
              <button type='submit' className='Calculate-button'>
                Calculate
              </button>
            </div>
          </form>
          <div className='Calculate-output'>
            <h3>{area === 0 ? 'Area= 1/2*b*c*sin(A)' : 'Area = ' + area}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalcArea;

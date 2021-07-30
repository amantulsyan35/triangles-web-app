import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { quizData } from './quizdata';

import './Quiz.css';

const getResults = (questions, answers) => {
  let complete = true;
  let score = 0;

  questions.forEach((question) => {
    const givenAnswer = answers[question.id];

    if (givenAnswer === undefined) {
      complete = false;
    }
    if (givenAnswer === question.answer) {
      score++;
    }
  });

  return {
    score,
    complete,
  };
};

const Quiz = () => {
  const [answer, setAnswer] = useState({});
  const [score, setScore] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { complete, score } = getResults(quizData, answer);

    if (complete) {
      setScore(score);
    }
  };

  return (
    <div className='Quiz'>
      <h1 className='Quiz-heading'>Quiz </h1>
      <Link to='/'>
        <button className='back'>Go Back</button>
      </Link>
      <form onSubmit={handleSubmit}>
        {quizData.map((x) => {
          return (
            <div key={x.id} className='Quiz-question'>
              <h3>{x.text} </h3>
              <div className='Quiz-options'>
                {x.options.map((options, idx) => (
                  <div key={idx}>
                    <input
                      type='radio'
                      value={options}
                      name={x.id}
                      checked={answer[x.id] === options}
                      onChange={() =>
                        setAnswer((answer) => ({
                          ...answer,
                          [x.id]: options,
                        }))
                      }
                    />
                    <label>{options}</label>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        <button type='submit' className='Quiz-submit'>
          {' '}
          Submit{' '}
        </button>
      </form>

      <h1>Score will be shown here</h1>
      <div className='Quiz-output'>
        <h2>
          {score === 0
            ? 'Score: For each correct answer you will get 1 point'
            : 'score: ' + score}
        </h2>
      </div>
    </div>
  );
};

export default Quiz;

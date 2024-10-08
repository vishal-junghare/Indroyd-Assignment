import React, { useState } from 'react';
import { questions } from './data';
import QRCodeGenerator from './components/QRCodeGenerator';
import QuestionDisplay from './components/QuestionDisplay';
import PlayerEntry from './components/PlayerEntry/PlayerEntry';
import ResultScreen from './components/ResultScreen';

import './App.css'

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  // const [isGameOver, setIsGameOver] = useState(false);

  const handlePlayerEntry = (name) => {
    setPlayerName(name);
  };

  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
      setResultMessage(`Congratulations...!`);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setResultMessage('Wrong answer. Try again!');
    }
  };

  return (
    <div className="main-container">
      {!playerName ? (
        <PlayerEntry onSubmit={handlePlayerEntry} />
      ) : currentQuestionIndex < questions.length ? (
        <>
          <QRCodeGenerator url="https://http://localhost:3000" />
          <QuestionDisplay
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        </>
      ) : (
        <ResultScreen resultMessage="You have completed all questions!" />
      )}
      {resultMessage && <ResultScreen resultMessage={resultMessage} />}
    </div>
  );
}

export default App;
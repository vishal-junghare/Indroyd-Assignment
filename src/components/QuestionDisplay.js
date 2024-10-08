import React, { useState } from 'react';

const QuestionDisplay = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = () => {
    if (selectedOption) {
      onAnswer(selectedOption);
    }
  };

  return (
    <div>
      <h2>{question.question}</h2>
      <ol >
        {question.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="answer"
                value={option}
                onChange={() => setSelectedOption(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ol>
      <button onClick={handleSubmit}>Submit Answer</button>
    </div>
  );
};

export default QuestionDisplay;
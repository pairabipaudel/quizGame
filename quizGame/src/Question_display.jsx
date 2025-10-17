import React, { useState } from "react";
import questionsCollection from "./Question_collection.js";
import './Question_display.css'

const Question_display = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [completedQuiz, setCompletedQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [totalTry, setTotalTry] = useState(0);
  const [randomQuestion, setRandomQuestion] = useState({});
  const [selectedOption, setSelectedOption] = useState("");

  // Start the quiz
  const game_on = () => {
    setStartQuiz(true);
    random_index();
  };

  // Pick random question
  const random_index = () => {
    let randomNum = Math.floor(Math.random() * questionsCollection.length);
    setRandomQuestion(questionsCollection[randomNum]);
    setSelectedOption("");
  };

  // Check answer
  const check_option = () => {
    if (selectedOption === "") {
      alert("Please select an option!");
      return false;
    }

    if (selectedOption === randomQuestion.answer) {
      setScore((prev) => prev + 1);
      
    }
    setTotalTry((prev) => prev + 1);

    if (totalTry + 1 === 5) {
      setCompletedQuiz(true);
      setStartQuiz(false);

    } else {
      random_index();
    }

    return true;
  };

  // Start screen
  const starting_quiz = () => (
    <div className="start_content">
      <p>Let's play quiz!!</p>
      <button className="start_button" onClick={game_on}>
        Start
      </button>
    </div>
  );

  // Quiz screen
  const playing_quiz = () => (
    <div className="question_content">
      <div className="question">
        <p>{randomQuestion.question}</p>
      </div>

      <div className="options">
        {randomQuestion.options?.map((option, index) => (
          <label key={index} className="option_label">
            <input
              type="radio"
              name="options"
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
            />
            {option}
          </label>
        ))}
      </div>

      <div className="next_button_container">
        <button className="next_button" onClick={check_option}>
          Next
        </button>
      </div>
    </div>
  );

  // Quiz complete
  const completed_quiz = () => (
    <div className="completed_content">
      <p>Quiz Completed!</p>
      <p>Your Score: {score} / {totalTry}</p>
      <button
        className="restart_button"
        onClick={() => {
          setCompletedQuiz(false);
          setTotalTry(0);
          setScore(0);
          random_index();
          setStartQuiz(true);
        }}
      >
        Restart
      </button>
    </div>
  );

  return (
    <div className="full_container">
      {!startQuiz && !completedQuiz && starting_quiz()}
      {startQuiz && !completedQuiz && playing_quiz()}
      {!startQuiz && completedQuiz && completed_quiz()}
    </div>
  );
};

export default Question_display;

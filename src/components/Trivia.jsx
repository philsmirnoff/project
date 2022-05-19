import React, { useState, useEffect } from 'react'

function Trivia({
  data,
  setTimeOut,
  questionNumber,
  setQuestionNumber,}) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");

    const handleClick = (e) => {
      setSelectedAnswer(e);
      setClassName("answer active")
    }
    useEffect(() => {
      setQuestion(data[questionNumber-1]);
    }, [data, questionNumber]);
  return (
    <div className='trivia'>
      <div className="question">
       {question?.question}
      </div>
      <div className="answers">
       {question?.answers.map((a) => (
          <div className={selectedAnswer === a ? className : "answer"} onClick={() => handleClick(a)}>{a.text}</div>
       ))}
        </div>
    </div>
  )
}

export default Trivia

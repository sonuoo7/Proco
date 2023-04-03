import React, { useState } from "react";
// import './Ask.css'
const Ask = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq">
      {questions.map((q, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            {q.question}
          </div>
          {index === activeIndex && (
            <div className="faq-answer">{q.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Ask;

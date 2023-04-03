import React from 'react'
import Ask from '../FAQ/Ask'
import './Ask.css';
const questions = [
    {
        question: "What is React?",
        answer:
        "React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage their state in a declarative way.",
    },
    {
        question: "What are the key features of React?",
        answer:
        "Some of the key features of React include its component-based architecture, virtual DOM, and unidirectional data flow.",
    },
    {
        question: "How do you install React?",
        answer:
        'You can install React using npm or yarn. First, create a new React project using a tool like Create React App. Then, navigate to the project directory and run "npm install react" or "yarn add react".',
    },
    {
        question: "How do you install React?",
        answer:
        'You can install React using npm or yarn. First, create a new React project using a tool like Create React App. Then, navigate to the project directory and run "npm install react" or "yarn add react".',
    },
    {
        question: "How do you install React?",
        answer:
        'You can install React using npm or yarn. First, create a new React project using a tool like Create React App. Then, navigate to the project directory and run "npm install react" or "yarn add react".',
    },
];
const AskCard = () => {
return (
    <div>
        <h1 className='faqheading'>Frequently Asked Questions </h1>
      <Ask questions={questions}/>
    </div>
  )
}

export default AskCard

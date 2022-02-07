import React from "react";
import Quiz from "../question";

const Blogs = (props) => {
  return (
    <>
      <h2>Id: {props.questionId}</h2>
      <h2>Question: {props.question}</h2>
      <h2>Answers: {props.answers}</h2>
      <h2>Correct: {props.correct}</h2>
      <hr />
    </>
  );
};

const Data = () => {
  return (
    <>
      {Quiz.map((q) => (
        <Blogs questionId = {q.questionId} question={q.question} correct = {q.correct} answers = {q.answers} />
      ))}
    </>
  );
};

export default Data;

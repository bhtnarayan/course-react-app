import React from 'react';
import { useState } from 'react';

import Quiz from '../question';

function ListQuiz(props) {
  return (
    <>
    <h2>{props.question}</h2>
    <h2>answers: {props.correct}</h2>
    </>
  )
}

function SendData() {
  return (
    <ul>

      {Quiz.map((q) => <ListQuiz question = {q.question} correct = {q.correct} />)}
    </ul>
  )
}
export default SendData;






import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./question";
import Car from "./classes/main";
import Container from "./classes/componentwillunm"; 
import MyForm from "./List_Form_Router/list_demo";

import SendData from "./List_Form_Router/list_demo";

import App from "./List_Form_Router/routerDemo";
import Component1 from "./react_hooks/hooks";
import UseRefDemo from "./react_hooks/hooks";
import TodoDemo from "./react_hooks/hooks";
import UseCallBackDemo from "./react_hooks/hooks";
import UseMemoDemo from "./react_hooks/hooks";
import useFetch from "./react_hooks/customHooks";


function Info(props) {
  return (
    <div key = {props.questionId}>
      <h3>{props.question}</h3>
      <p>{props.answers}</p>
      <p>{props.correct}</p>
    </div>
  );
}

function Detail(props) {
  return (
    <div>
      {Quiz.map((e) => {
        return (
          <Info
            question={e.question}
            correct={e.correct}
            answers={e.answers}
            questionId = {e.questionId}
          />
        );
      })}
    </div>
  );
}

const Home = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
            {data && data.map((item) => {
                return <p key = {item.id}>{item.id} {item.title}</p>;
            })}
        </>
    );
};


ReactDOM.render(<Home />, document.getElementById('root'));
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useReducer,
  useCallback,
  useMemo,
} from "react";
import ReactDOM from "react-dom";
import "../index.css";
import Todos from "./Todos";

// react use context hook
const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}
function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}
function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}
function Component5() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user}`} again</h2>
    </>
  );
}

// react use reference hook
function UseRefDemo() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <h2>
        Current value: {inputValue} | {inputValue.length}
      </h2>
      <h2>
        Previous value: {previousInputValue.current} |{" "}
        {previousInputValue.current.length}
      </h2>
    </>
  );
}

// use reducer hooks

const initialTodos = [
  { id: 1, title: "Todo 1", complete: false },
  { id: 2, title: "Todo 2", complete: false },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function TodoDemo() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

// react useCallback hook

const UseCallBackDemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const decrement = () => {
    setCount((c) => c - 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, `New Todo ${t.length + 1}`]);
  }, [todos]);

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count:
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

// react useMemo hooks
const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, `New Todo ${t.length + 1}`]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}

        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating ...");
  for (let i = 0; i < 100000; i++) {
    num += 1;
  }
  return num;
};

export default UseMemoDemo;

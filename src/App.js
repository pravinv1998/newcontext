import logo from "./logo.svg";
import "./App.css";
import TodoProvider from "./context/TodoProvider";

import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </div>
  );
}

export default App;

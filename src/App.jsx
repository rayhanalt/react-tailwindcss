import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [isRefresh, setIsRefresh] = useState(true);

  const setRefresh = (status) => {
    setIsRefresh(status);
  };

  return (
    <div className="App min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="content p-4 max-w-md w-full bg-white  rounded-2xl shadow-md">
        <Header setRefresh={setRefresh} />
        <TodoList setRefresh={setRefresh} isRefresh={isRefresh} />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";

const Header = ({ setRefresh }) => {
  const [title, setTitle] = useState("");

  // fungsi untuk menambah data todo melalui API ketika tombol "Add" di klik
  const addTodo = () => {
    const newTodo = { title, done: false };

    fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    }).then(() => {
      // ketika sukses menambah data, reset form dengan mengeset state title menjadi empty string
      setTitle("");
      setRefresh(true);

      // setTimeout(() => {
      //   alert(`new ${title} todo added.`);
      // }, 500);
    });
  };

  return (
    <div className="p-4 bg-gray-800 text-white flex flex-col items-center justify-between rounded-xl">
      <h2 className="text-4xl font-semibold mb-2">Simple Todo App</h2>
      <div>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className=" p-2 mr-2 text-black border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Add Todo..." />
        <span className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600" onClick={addTodo}>
          Add
        </span>
      </div>
    </div>
  );
};

export default Header;

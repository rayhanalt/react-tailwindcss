const TodoItem = ({ todo, setRefresh }) => {
  const updateTodo = () => {
    todo.done = !todo.done;

    fetch("http://localhost:8000/todos/" + todo.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }).then(() => {
      console.log("todo updated.");
      setRefresh(true);
    });
  };

  const deleteTodo = () => {
    fetch("http://localhost:8000/todos/" + todo.id, {
      method: "DELETE",
    }).then(() => {
      console.log("todo deleted.");
      setRefresh(true);
    });
  };

  return (
    <li className={`flex items-center mb-2`}>
      <div className="cursor-pointer flex-1" onClick={updateTodo}>
        <span className={` ${todo.done ? "line-through text-gray-500" : ""}`}>{todo.title}</span>
        {todo.done && <span className="ml-2">✔</span>}
      </div>
      <span
        className="cursor-pointer bg-white rounded-md p-2 inline-flex items-center justify-center text-red-400 hover:text-red-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        onClick={deleteTodo}>
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    </li>
  );
};

export default TodoItem;

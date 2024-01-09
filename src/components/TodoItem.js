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
    <li className={`flex items-center `}>
      <div className={`cursor-pointer flex-1 ${todo.done ? "line-through text-gray-500" : ""}`} onClick={updateTodo}>
        {todo.title}
      </div>
      <span className="cursor-pointer text-red-500 hover:text-red-700" onClick={deleteTodo}>
        x
      </span>
    </li>
  );
};

export default TodoItem;

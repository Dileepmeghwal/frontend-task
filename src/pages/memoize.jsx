import { useMemo, useState } from "react";

const todos = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Build app", completed: false },
  { id: 3, text: "Write code", completed: true },
];

function Memoize() {
  const [filter, setFilter] = useState("All");
  const [count, setCount] = useState(0);

  // Filter the todos (this runs EVERY render)
  const filterTodos = useMemo(() => {
      console.log("filter todos...");
    return todos.filter((t) => {
      if (filter === "all") return true;
      return t.completed;
    });
  }, [filter]);

  //   const filterTodos = todos.filter((t) => {
  //     if (filter === "all") return true;
  //     return t.completed;
  //   });
  return (
    <>
      <h1>Memo</h1>
      <button onClick={() => setFilter("all")}>show all</button>
      <button onClick={() => setFilter("completed")}>show complete</button>
      <button onClick={() => setCount(count + 1)}>Counter: {count} </button>
      <ul>
        {filterTodos.map((t) => (
          <li key={t.id}>{t.text}</li>
        ))}
      </ul>
    </>
  );
}

export default Memoize;

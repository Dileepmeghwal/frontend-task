import { useCallback, useContext, useMemo, useState } from "react";
import { ThemeContext } from "../useContext/themSwitch";
const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

function SearchList() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);

  const filteredData = useCallback((search) => {
    console.log("filter render..");
    return items.filter((i) => i.toLowerCase().includes(search.toLowerCase()));
  }, []);

  const d = useMemo(() => filteredData(query), [query]);

  function greet() {
    console.log("greet");
  }
  const x = useMemo(() => greet(), []);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        name=""
        id=""
      />
      <ul>
        {d.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <button onClick={() => setCount(count + 1)}>Inc:{count}</button>
    </>
  );
}

export default SearchList;

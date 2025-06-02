import { useMemo, useState } from "react";

const SearchFilter = () => {
  const [search, setSearch] = useState("");
  const items = ["Apple", "Banana", "Orange", "Mango"];
  const [update, setUpdate] = useState(0);

  console.log("render");

  //with useMemo it not render on every render
  const filterData = useMemo(() => {
    console.log("render2");

    return items.filter((text) =>
      text.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  //   This is render on every-render wihout useMemo
  // const filterData = items.filter((text) => {
  //   console.log("render2");
  //   return text.toLowerCase().includes(search.toLowerCase());
  // });

  //   const momoiseList = useMemo(() => filterData, [search]);



  return (
    <>
      <input
        type="text"
        name=""
        id=""
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <ul>
          {filterData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <button onClick={() => setUpdate((c) => c + 1)}>
        UpdateState:{update}
      </button>
    </>
  );
};

export default SearchFilter;

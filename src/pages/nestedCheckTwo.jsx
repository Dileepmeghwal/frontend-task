import React, { useEffect, useState } from "react";

const list = [
  { id: 101, name: "Wireless Mouse" },
  { id: 102, name: "Bluetooth Headphones" },
  { id: 103, name: "Mechanical Keyboard" },
  { id: 104, name: "HD Monitor" },
  { id: 105, name: "USB-C Hub" },
];

const NestedCheckTwo = () => {
  const [selectedItem, setSelectedItem] = useState({}); //<== has map
  const allSelected = Object.keys(selectedItem).length === list.length;

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const all = {};
      for (const item of list) {
        all[item.id] = item;
      }
      setSelectedItem(all);
    } else {
      setSelectedItem({});
    }
  };

  const handleCheckbox = (e, item) => {
    const updated = { ...selectedItem };
    console.log("updated", updated);
    if (e.target.checked) {
      updated[item.id] = item;
    } else {
      delete updated[item.id];
    }
    setSelectedItem(updated);
  };

  return (
    <div>
      {title}
      <div>
        <input
          type="checkbox"
          name=""
          checked={allSelected}
          onChange={handleSelectAll}
          id="selectAll"
        />
        <label htmlFor="selectAll">Select All</label>
      </div>

      <>
        {list.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={!!selectedItem[item.id]}
              onChange={(e) => handleCheckbox(e, item)}
            />
            <label htmlFor="selectAll">{item.name}</label>
          </div>
        ))}

        {Object.values(selectedItem).map((item) => {
          return <p>{item.name}</p>;
        })}
      </>
    </div>
  );
};

export default NestedCheckTwo;

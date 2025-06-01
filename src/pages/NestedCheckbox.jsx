import React, { useState } from "react";
import { list } from "./list";

const NestedCheckbox = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  console.log("s", selectedItems);

  const allSelected = selectedItems.length === list.length;
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIds = list.map((item) => item.id);
      setSelectedItems(allIds);
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelect = (e, id) => {
    if (e.target.checked) {
      if (!selectedItems.includes(id)) {
        setSelectedItems([...selectedItems, id]);
      }
    } else {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    }
  };
  return (
    <div>
      <input
        type="checkbox"
        name=""
        id="selectAll"
        onChange={handleSelectAll}
        checked={allSelected}
      />
      <label htmlFor="">Select All</label>
      {list?.map((item) => (
        <div key={item?.id}>
          <input
            type="checkbox"
            name=""
            id=""
            checked={selectedItems.includes(item.id)}
            onChange={(e) => handleSelect(e, item.id)}
          />
          <label htmlFor="">{item?.name} </label>
        </div>
      ))}
    </div>
  );
};

export default NestedCheckbox;

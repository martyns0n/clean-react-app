import React, { useState } from "react";
import Row from "./Row"

const defaultValue = (index: number) => ({
  value: Math.round(Math.random() * 1000),
  label: `label ${index + 1}`
});

const defaultState = Array.from({ length: 200 }, (_el, index: number) =>
  defaultValue(index)
);

const App = () => {
  const [list, setList] = useState(defaultState);

  const handleUpdate = () => {
    const [el, ...rest] = list;
    const value = Math.round(Math.random() * 1000);
    const newEl = { ...el, value };

    setList([newEl, ...rest]);
  };

  return (
    <div>
      <h1>Test app</h1>
      <button onClick={handleUpdate}>Update</button>

      {list.map(el => (
        <Row data={el} />
      ))}
    </div>
  );
};

export default App;

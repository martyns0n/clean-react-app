import React, { useMemo } from "react";
// TODO: tsx make good rendering for one updated row

interface Props {
  value: number,
}

const Row = ({value}: Props) => {
  
  const newValue = useMemo(() => Math.round(Math.random() * 1000), [value]);
  const newString = `label: ${value} / ${newValue}`;

  return (
    <div>
      <span style={{ marginRight: "20px" }}>{newString}</span>
    </div>
  );
};

export default Row;
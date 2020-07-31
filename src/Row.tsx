import React, { useMemo } from "react";
// TODO: tsx make good rendering for one updated row

interface Props {
  data: Data
}

interface Data {
    label: string;
    value: number;
}

const Row = ({ data }: Props) => {
  const { value } = data;
  const newValue = useMemo(() => Math.round(Math.random() * 1000), [data]);
  const newString = `label: ${value} / ${newValue}`;

  return (
    <div>
      <span style={{ marginRight: "20px" }}>{newString}</span>
    </div>
  );
};

export default Row;
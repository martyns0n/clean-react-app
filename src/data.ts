const value = (index: number) => ({
  value: Math.round(Math.random() * 1000),
  label: `label ${index + 1}`
});

const data = Array.from({ length: 200 }, (_el, index: number) =>
  value(index)
);

export default data;
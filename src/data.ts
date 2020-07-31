const fillElement = (index: number) => ({
  value: Math.round(Math.random() * 1000),
  label: `label ${index + 1}`
});

const data = Array.from({ length: 2000 }, (_el, index: number) =>
  fillElement(index)
);

export default data;
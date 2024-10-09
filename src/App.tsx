import classNames from "classnames";

function App() {
  const data = [
    {
      row: 1,
      cols: 1,
      size: [2, 2],
      type: "test",
    },
    {
      row: 2,
      cols: 1,
      size: [1, 2],
      type: "test",
    },
    {
      row: 3,
      cols: 1,
      size: [2, 2],
      type: "test",
    },
    {
      row: 1,
      cols: 3,
      size: [3, 2],
      type: "test",
    },
    {
      row: 1,
      cols: 1,
      size: [2, 2],
      type: "test",
    },
    {
      row: 2,
      cols: 1,
      size: [1, 2],
      type: "test",
    },
    {
      row: 2,
      cols: 2,
      size: [2, 2],
      type: "ttest",
    },
    {
      row: 1,
      cols: 2,
      size: [3, 2],
      type: "test",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-5 gap-2">
        {data.map((item) => (
          <span
            key={item.row}
            className={classNames(
              "bg-blue-900 text-white p-4 rounded-xl",
              `col-span-${item.size[1]}`,
              `row-span-${item.size[0]}`
            )}
          >
            {item.type}
          </span>
        ))}
      </div>
    </>
  );
}

export default App;

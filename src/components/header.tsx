const Header = ({ cols }: { cols: string[] }) => {
  return (
    <thead style={{ backgroundColor: "lightgreen" }}>
      <tr>
        {cols.map((col) => (
          <td key={col}>{col}</td>
        ))}
      </tr>
    </thead>
  );
};

export { Header };

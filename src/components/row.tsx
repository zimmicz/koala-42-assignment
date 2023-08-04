import React from "react";

const Row = ({
  data,
  onDelete,
  children,
}: React.PropsWithChildren<{
  data: Record<string, boolean | number | string | React.ReactNode>;
  onDelete?: () => void;
}>) => {
  const [open, setOpen] = React.useState(false);

  if (!data) {
    return null;
  }

  return (
    <>
      <tr>
        <button
          onClick={() => {
            setOpen((cur) => !cur);
          }}
        >
          toggle
        </button>
        {Object.values(data).map((d) => (
          <td>{d}</td>
        ))}
        <button onClick={onDelete}>delete</button>
      </tr>
      {open ? children ?? null : null}
    </>
  );
};

export { Row };

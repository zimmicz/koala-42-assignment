import React from "react";
import { prependToggleColumn } from "../utils/prepend-toggle-column";
import { Header } from "./header";
import type { data as input } from "../data";
import { Row } from "./row";
import _ from "lodash";

const Table = ({ data }: { data: typeof input }) => {
  const [state, setState] = React.useState(data);

  return (
    <table>
      <Header cols={prependToggleColumn(Object.keys(data[0].data))} />
      {state.map((row, rowIndex) => (
        <Row
          key={`row-${row.data?.ID}-${rowIndex}`}
          data={row.data}
          onDelete={() => {
            setState((cur) => {
              const next = _.without(cur, row);
              return next;
            });
          }}
        >
          <Header
            cols={prependToggleColumn(
              Object.keys(row.children?.has_nemesis?.records[0]?.data ?? {})
            )}
          />
          {row.children?.has_nemesis?.records.map((child, childIndex) => (
            <Row
              key={`child-${child.data.ID}-${childIndex}`}
              data={child.data}
              onDelete={() => {
                setState((cur) => {
                  const nextRow = _.without(
                    row.children.has_nemesis?.records,
                    child
                  );

                  const next = structuredClone(cur);
                  next[rowIndex].children = nextRow;

                  return next;
                });
              }}
            >
              <Header
                cols={prependToggleColumn(
                  Object.keys(child.children.has_secrete?.records[0].data ?? {})
                )}
              />
              {child.children.has_secrete?.records.map(
                (record, recordIndex) => (
                  <Row
                    key={`record-${record.data.ID}-${recordIndex}`}
                    data={record.data}
                  ></Row>
                )
              )}
            </Row>
          ))}
        </Row>
      ))}
    </table>
  );
};

export { Table };

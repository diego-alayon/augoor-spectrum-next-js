import { useAsyncList, TableView, TableHeader, Column, TableBody, Row, Cell } from '@adobe/react-spectrum';
import { useCollator } from '@adobe/react-spectrum';

/**
 * @typedef {Object} Character
 * @property {string} name
 * @property {number} height
 * @property {number} mass
 * @property {number} birth_year
 */

function AsyncSortTable() {
  let collator = useCollator({ numeric: true });

  let list = useAsyncList({
    async load({ signal }) {
      let res = await fetch(`https://swapi.py4e.com/api/people/?search`, {
        signal
      });
      let json = await res.json();
      return {
        items: json.results
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          let first = a[sortDescriptor.column];
          let second = b[sortDescriptor.column];
          let cmp = collator.compare(first, second);
          if (sortDescriptor.direction === 'descending') {
            cmp *= -1;
          }
          return cmp;
        })
      };
    }
  });

  return (
    <TableView
      aria-label="Example table with client side sorting"
      selectionMode="multiple"
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}
      height="size-8000"
    >
      <TableHeader>
        <Column key="name" allowsSorting>Name</Column>
        <Column key="height" allowsSorting>Height</Column>
        <Column key="mass" allowsSorting>Mass</Column>
        <Column key="birth_year" allowsSorting>Birth Year</Column>
        <Column key="gender" allowsSorting>Gender</Column>
        <Column key="films" allowsSorting>Films</Column>
      </TableHeader>
      <TableBody
        items={list.items}
        loadingState={list.loadingState}
      >
        {(item) => (
          <Row key={item.name}>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

export default AsyncSortTable;

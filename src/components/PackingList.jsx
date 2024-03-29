import { useState } from 'react';
import Item from './Item';

export default function PackingList({
  items,
  onDeleteItems,
  onSetItems,
  onTogglePacked,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;
  if (sortBy === 'input') {
    sortedItems = items;
  } else if (sortBy === 'description') {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === 'packed') {
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            items={items}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onSetItems={onSetItems}
            onHandleTogglePacked={onTogglePacked}
          />
        ))}
      </ul>

      <div className="actions">
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

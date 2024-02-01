import Item from './Item';

export default function PackingList({
  items,
  onDeleteItems,
  onSetItems,
  onHandleTogglePacked,
}) {
  console.log(items);
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            items={items}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onSetItems={onSetItems}
            onHandleTogglePacked={onHandleTogglePacked}
          />
        ))}
      </ul>
    </div>
  );
}

import Item from './Item';

export default function PackingList({ items }) {
  console.log(items);
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

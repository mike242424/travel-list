export default function Item({ item, onDeleteItems }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => console.log('checked')}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

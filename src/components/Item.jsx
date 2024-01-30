export default function Item({ item }) {
  return (
    <li>
      <input type="checkbox" checked={item.packed} />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

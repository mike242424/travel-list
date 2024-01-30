import { useState } from 'react';

export default function Form({ onSetItems, items }) {
  const [item, setItem] = useState('');
  const [value, setValue] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    onSetItems([
      ...items,
      {
        id: 4,
        description: item,
        quantity: value,
        packed: false,
      },
    ]);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 🩳</h3>
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
}

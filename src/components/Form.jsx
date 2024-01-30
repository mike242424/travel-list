export default function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your trip? 🩳</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button type="submit">ADD</button>
    </form>
  );
}

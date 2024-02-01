export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list ☀️</em>
      </p>
    );
  }
  const numTotal = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage =
    numTotal === 0 ? 0 : Math.round((numPacked / numTotal) * 100);

  return (
    <footer className="stats">
      💼{' '}
      <em>
        {percentage !== 100
          ? `You have ${numTotal} ${
              items.length === 1 ? `item` : 'items'
            } on your
        list, and you already packed ${numPacked} (${percentage}
        %)`
          : 'You got everything! Ready to go 🛩️'}
      </em>
    </footer>
  );
}

export default function CartItem({ item, onRemove }) {
  return (
    <li className="py-4 flex gap-4 items-center">
      <img src={item.image} alt={item.title} className="h-16 object-contain" />
      <div className="flex-1">
        <p className="font-semibold line-clamp-1">{item.title}</p>
        <p>${item.price} × {item.qty}</p>
      </div>
      <button onClick={() => onRemove(item.id)} className="text-red-600">Remove</button>
    </li>
  );
}
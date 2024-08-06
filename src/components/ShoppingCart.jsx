import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function ShoppingCart({ itemCount, onClick }) {
  return (
    <div data-testid="shopping-cart" onClick={onClick} role="button">
      <ShoppingCartIcon className="w-8" />
      {itemCount >= 1 && (
        <span
          data-testid="item-count"
          className="absolute top-3 right-4 bg-red-600 w-1 h-1 inline-block rounded-full p-4 text-white text-2xl flex items-center justify-center"
        >
          {itemCount}
        </span>
      )}
    </div>
  );
}

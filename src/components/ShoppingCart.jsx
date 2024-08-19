import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCartContext } from "../hooks/Cartprovider";
export default function ShoppingCart({ onClick }) {
  const { cart, setCart } = useCartContext();
  return (
    <div
      data-testid="shopping-cart"
      onClick={onClick}
      role="button"
      className="relative"
    >
      <ShoppingCartIcon className="w-8" />
      {cart.length >= 1 && (
        <span
          data-testid="item-count"
          className="absolute bottom-5 left-6 bg-red-600 w-6 h-6  rounded-full  text-white text-base text-center"
        >
          {cart.length}
        </span>
      )}
    </div>
  );
}

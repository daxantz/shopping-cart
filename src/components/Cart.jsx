import { useCartContext } from "../hooks/Cartprovider";

export default function Cart() {
  const { cart, setCart } = useCartContext();

  const orderTotal = cart.reduce((accumulator, currentItem) => {
    return (accumulator += currentItem.price * currentItem.quantity);
  }, 0);
  return (
    <div>
      <div>
        {cart.map((item) => (
          <div className="flex" key={item.id}>
            <div className="w-36">
              <img src={item.image} alt="" />
            </div>
            <div className="flex w-1/4 flex-col">
              <p>{item.title}</p>
              <p>{item.category}</p>
              <p>Qty: {item.quantity}</p>
              <p>Total price: ${item.price * item.quantity}</p>
            </div>
            <div className="flex items-center justify-evenly  w-40  ">
              <button className=" bg-blue-500 py-3 px-5 rounded-full text-white ">
                -
              </button>
              <p>{item.quantity}</p>
              <button className="bg-blue-500 py-3 px-5 rounded-full text-white">
                +
              </button>
            </div>
            <p></p>
          </div>
        ))}
      </div>
      <div>
        <p>Order Summary</p>
        <p>${orderTotal.toFixed(2)}</p>
      </div>
    </div>
  );
}

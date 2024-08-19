import { useCartContext } from "../hooks/Cartprovider";

export default function Cart() {
  const { cart, setCart } = useCartContext();

  const orderTotal = cart.reduce((accumulator, currentItem) => {
    return (accumulator += currentItem.price * currentItem.quantity);
  }, 0);
  return (
    <div className="flex p-10 justify-evenly">
      <div>
        {cart.map((item) => (
          <div className="flex justify-around mb-10" key={item.id}>
            <div className="w-36">
              <img src={item.image} alt="" />
            </div>
            <div className="flex w-1/4 flex-col gap-3">
              <p className="font-bold">{item.title}</p>
              <p className="text-stone-600"> {item.category}</p>
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
      <div className="border-2 border-black min-w-96  max-h-96 p-5 flex flex-col justify-around">
        <div className="font-bold text-lg">
          <p>Order Summary</p>
          <p>$ {orderTotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-stone-600 ">
          <p>Subtotal ({cart.length} items)</p>
          <p>${orderTotal.toFixed(2)}</p>
        </div>

        <hr />
        <div className="flex justify-between">
          <p>Total</p>
          <p>${orderTotal.toFixed(2)}</p>
        </div>
        <div>
          <button className="bg-blue-500  rounded-full text-white w-full py-1">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

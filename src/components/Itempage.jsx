import { useEffect, useState } from "react";
import { useFetcher, useLoaderData, useParams } from "react-router-dom";
import { useCartContext } from "../hooks/Cartprovider";
export default function Listingpage() {
  const itemData = useLoaderData();
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState(
    itemData.items.find((item) => item.id === Number(id))
  );
  // const [selectedItemId, setSelectedItemId] = useState();
  const { cart, setCart } = useCartContext();

  useEffect(() => {
    setSelectedItem(itemData.items.find((item) => item.id === Number(id)));
    console.log("id changed, now switching to new item", selectedItem.title);
  }, [id]);

  function addToCart(id, item) {
    setCart((prevCart) => {
      // Check if the item already exists in the cart
      const itemExists = prevCart.some(
        (cartItem) => cartItem.id === Number(id)
      );

      if (itemExists) {
        // Update the quantity of the existing item
        return prevCart.map((cartItem) =>
          cartItem.id === Number(id)
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );
      } else {
        // Add the new item to the cart
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  }
  if (!selectedItem) return <p>loading...</p>;
  return (
    <div className="flex justify-around p-10">
      <div className="w-1/4">
        <img src={selectedItem.image} alt="Item image" />
      </div>
      <div className="w-2/4 flex flex-col gap-5 justify-center">
        <div>
          <h2 className="font-bold text-2xl">{selectedItem.title}</h2>
          <p className="text-stone-400 text-lg">{selectedItem.category}</p>
          <p>$ {selectedItem.price}</p>
        </div>

        <div>
          <p>{selectedItem.description}</p>
          <button
            className="bg-blue-500 py-3 px-5 rounded-full text-white mt-4"
            onClick={() => addToCart(id, selectedItem)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

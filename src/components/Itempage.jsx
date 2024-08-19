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
    <div>
      <div className="max-w-28">
        <img src={selectedItem.image} alt="Item image" />
      </div>
      <div>
        <h2>{selectedItem.title}</h2>
        <p>{selectedItem.category}</p>
        <p>{selectedItem.price}</p>

        <div>
          <p>{selectedItem.description}</p>
          <button onClick={() => addToCart(id, selectedItem)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useFetcher, useLoaderData, useParams } from "react-router-dom";

export default function Listingpage() {
  const itemData = useLoaderData();
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    setSelectedItem(itemData.items.find((item) => item.id === Number(id)));
    console.log("id changed, now switching to new item", selectedItem);
  }, [id]);
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
          <button>-</button>
          <span>{selectedItem.quantity}</span>
          <button>+</button>
        </div>
        <div>
          <p>item description</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

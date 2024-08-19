import { useLoaderData, Link } from "react-router-dom";
import ListingItem from "./ListingItem";

export default function Shop() {
  const itemData = useLoaderData();
  return (
    <div className="p-10">
      <p>All items({itemData.items.length})</p>
      <div className="grid grid-rows-5 grid-cols-4 gap-5 ">
        {itemData.items.map((item) => (
          <Link key={item.id} to={`/shop/item/${item.id}`}>
            <ListingItem itemData={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

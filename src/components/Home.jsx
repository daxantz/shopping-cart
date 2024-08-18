import ListingItem from "./ListingItem";
import Navbar from "./Navbar";
import { useLoaderData, Link } from "react-router-dom";
export default function Home({ data }) {
  const itemData = useLoaderData();
  console.log(itemData.items[0].title);
  const featuredItems = itemData.items.slice(0, 3);

  return (
    <>
      <h1>this is home</h1>
      <main className="container mx-auto px-20 text-2xl ">
        <div className="flex flex-col items-center gap-10 my-10">
          <h1 className="text-4xl font-medium">Welcome to my shop</h1>
          <p className="w-3/4 text-center">
            Discover a wide range of clothing for Men and Women
          </p>
          <button className="bg-blue-500 px-5 py-3 rounded-full text-2xl text-white">
            <Link to="shop">Shop Now</Link>
          </button>
        </div>
        <div>
          <h2 className="text-center text-3xl mb-10">Featured Items</h2>
          <div className="flex justify-around flex-wrap">
            {/* <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem /> */}
            {featuredItems.map((item) => (
              <ListingItem key={item.id} itemData={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

import ListingItem from "./ListingItem";
import Navbar from "./Navbar";
export default function Home({ data }) {
  return (
    <>
      <Navbar itemCount={4} />
      <main className="container mx-auto px-20 text-2xl ">
        <div className="flex flex-col items-center gap-10 my-10">
          <h1 className="text-4xl font-medium">Welcome to my shop</h1>
          <p className="w-3/4 text-center">
            Discover a wide range of clothing for Men and Women
          </p>
          <button className="bg-blue-500 px-5 py-3 rounded-full text-2xl text-white">
            Shop Now
          </button>
        </div>
        <div>
          <h2 className="text-center text-3xl mb-10">Featured Items</h2>
          <div className="flex justify-around flex-wrap">
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
          </div>
        </div>
      </main>
    </>
  );
}

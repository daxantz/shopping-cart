import ShoppingCart from "./ShoppingCart";

export default function Navbar() {
  return (
    <nav className="border-2 border-black flex justify-between p-5">
      <div className="navstart flex gap-8">
        <div className="flex items-end">
          <h1 className="text-3xl">
            <a href="">Dax's Shop</a>
          </h1>
        </div>
        <div className="flex gap-5 items-end">
          <span className="text-xl">
            <a href="">Home</a>
          </span>
          <span className="text-xl">
            <a href="">Store</a>
          </span>
        </div>
      </div>
      <div className="navend flex gap-6 px-5">
        <input
          className="border-2 rounded-3xl bg-neutral-200 p-2 "
          type="text"
          placeholder="Search"
        />
        <a href="" className="flex items-center">
          <ShoppingCart itemCount={10} />
        </a>
      </div>
    </nav>
  );
}

import ListingItem from "./ListingItem";

export default function Home({ data }) {
  return (
    <main>
      <nav>
        <div className="navstart">
          <span>Shop</span>
          <span>Home</span>
          <span>Store</span>
        </div>
        <div className="navend">
          <input type="text" placeholder="Search" />
          <img src="" alt="shopping cart icon" />
        </div>
      </nav>

      <div>
        <h1>Welcome to my shop</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          asperiores eaque dolorum ullam! Dicta beatae non dolores dolor animi!
          Inventore incidunt optio tempora hic! Sit eos nisi consequuntur
          officiis ullam.
        </p>
        <button>Shop Now</button>
      </div>
      {/* featured items */}
      <div className="flex">
        <ListingItem />
        <ListingItem />
        <ListingItem />
        <ListingItem />
      </div>
    </main>
  );
}

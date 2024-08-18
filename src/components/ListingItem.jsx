export default function ListingItem({ itemData }) {
  return (
    <div className="text-2xl border-2 border-black rounded-2xl flex flex-col py-6  w-3/12">
      <div className="flex justify-center">
        <img
          className="w-full max-w-64 rounded-2xl"
          src={itemData.image}
          alt="item image"
        />
      </div>
      <div className="flex flex-row justify-between px-5 mt-10">
        <div>
          <p className="font-bold">{itemData.title}</p>
          <p className="text-stone-400 text-xl">{itemData.category}</p>
          <p>{itemData.price}</p>
        </div>
        <div className="flex items-end text-white">
          <button className="bg-blue-500 py-3 px-5 rounded-full">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

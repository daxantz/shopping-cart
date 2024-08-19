export default function ListingItem({ itemData }) {
  return (
    <div className=" border-2 border-black rounded-2xl flex flex-col py-6 justify-around h-96 max-w-full ">
      <div className="flex justify-center  overflow-hidden w-36 mx-auto">
        <img
          className="w-full object-cover"
          src={itemData.image}
          alt="item image"
        />
      </div>
      <div className="px-5 flex flex-col gap-5">
        <div className="">
          <p className="font-bold">{itemData.title}</p>
          <p className="text-stone-400 text-xl">{itemData.category}</p>
          <p>{itemData.price}</p>
        </div>

        <div className="flex items-end text-white w-13 text-xs">
          <button className="bg-blue-500 py-3 px-5 rounded-full">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

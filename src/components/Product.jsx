const Product = ({ imageUrl, name, price, sellingPrice }) => {
  return (
    <div className="flex items-center m-3">
      <img
        className="w-[70px] h-[70px] border-2 p-1"
        src={imageUrl}
        alt="product"
      />
      <div className="flex flex-col ml-3 w-[80%]  ">
        <p className="font-semibold flex-1 text-xs">{name}</p>
        <span className="text-gray-400 text-xs mt-1">R${sellingPrice}</span>
        <span className="text-sm">R${price}</span>
      </div>
    </div>
  );
};

export default Product;

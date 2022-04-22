import { useEffect, useState } from "react";
import Button from "./Button";
import Product from "./Product";
import { useParams } from "react-router-dom";

const Card = () => {
  const [loading, setLoading] = useState(null);
  const [products, setProducts] = useState([]);
  const [freeShipping, setFreeShipping] = useState(false);
  const [productsSum, setProductsSum] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`./${slug}.json`, {
      headers: {
        Accept: "Application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setProducts(res.items))
      .catch((res) => console.log("Error", res));
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    if (loading) return;

    const sumProductsCartPrice = products
      .map((prod) => prod.price)
      .reduce((accumulator, item) => accumulator + item, 0)
      .toFixed(2);
    setProductsSum(sumProductsCartPrice);
    if (sumProductsCartPrice > 10) setFreeShipping(true);
  }, [products, loading]);

  return (
    <div className="bg-bgColor min-h-screen  flex items-center justify-center">
      <div className="bg-white  w-80 rounded-lg font-poppins">
        <h3 className="text-center font-bold text-sm py-2 border-b-2">
          Meu Carrinho
        </h3>

        {products?.map(({ uniqueId, imageUrl, name, price, sellingPrice }) => (
          <Product
            key={uniqueId}
            imageUrl={imageUrl}
            name={name}
            price={price}
            sellingPrice={sellingPrice}
          />
        ))}

        <div className="flex flex-col border py-3 ">
          <div className="flex mx-3 justify-between items-center">
            <span className="font-bold">Total</span>
            <span className="font-semibold">R${productsSum}</span>
          </div>
          {freeShipping && (
            <div className="mx-auto py-1 ">
              <span className="bg-freeShippingBg text-freeShippingText text-xs py-[5px] px-4 rounded-2xl">
                Parabéns, Sua compra tem frete grátis!
              </span>
            </div>
          )}
        </div>

        <Button text="Finalizar Compra" />
      </div>
    </div>
  );
};

export default Card;

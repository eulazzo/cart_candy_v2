import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 items-center bg-gray-300  justify-center h-screen">
      <h3 className="font-poppins text-3xl">Carrinho Teste</h3>
      <Link to="/abaixo" style={{ textDecoration: "none" }}>
        <button className="bg-btnColor py-3 px-2 rounded-lg hover:bg-blue-800 hover:text-white">
          Carrinho Abaixo de R$10
        </button>
      </Link>
      <Link to="/acima" style={{ textDecoration: "none" }}>
        <button className="bg-btnColor py-3  px-2 rounded-lg hover:bg-blue-800 hover:text-white">
          Carrinho Acima de R$10
        </button>
      </Link>
    </div>
  );
};

export default Home;

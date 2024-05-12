import { useEffect, useState } from "react";
import "./App.css";
import SingelProduct from "./SingelProduct";

function App() {
  const [product, setProduct]=useState([]);


  useEffect(()=>{
    fetch('fakeData.json')
    .then(res => res.json())
    .then(data => setProduct(data))
  },[])
  console.log(product);
  return (
    <>
      <div className="flex justify-around">
        <div className=" border-2 border-red-400">
          {
            product.map((pd, idx) => <SingelProduct product={pd}
            key={idx}
            ></SingelProduct>)
          }
        </div>
        <div className="w-96 shadow-md shadow-gray-300">
          <h1 className="text-3xl text-center font-bold">
            This Is Card
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;

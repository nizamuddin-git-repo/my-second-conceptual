import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className='text-3xl font-bold'>Hello World</h1> */}
      <div className="flex justify-between">
        <div>
          <div className="w-80">
            <img className="w-40" src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="" />
            <h1 className="text-3xl font-bold">Ters Ters</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique laudantium, ab dolores quasi nulla non quia quod animi iure?</p>
            <div>
              <h1 className="text-3xl font-bold">520 $</h1>
              <button>Add To Card</button>
            </div>
          </div>

          <div>
            <img src="" alt="" />
          </div>
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

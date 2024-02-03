import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setcolor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=>setcolor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
          onClick={()=>setcolor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
          onClick={()=>setcolor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
          onClick={()=>setcolor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
          onClick={()=>setcolor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>
          <button
          onClick={()=>setcolor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
          onClick={()=>setcolor("yellow")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
          onClick={()=>setcolor("gray")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
          onClick={()=>setcolor("lavender")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg"
            style={{ backgroundColor: "lavender" }}
          >
            lavender
          </button>
          <button
          onClick={()=>setcolor("white")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
          onClick={()=>setcolor("Brown")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Brown" }}
          >
            Brown
          </button>

        </div>
      </div>
    </>
  );
}

export default App;

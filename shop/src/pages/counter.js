import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/reducer/shopReducer";

function Counter() {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1>Counter</h1>
      </div>
      <div>
        <button
          style={{
            height: 150,
            width: 250,
            backgroundColor: "black",
            color: "green",
          }}
          onClick={() => dispatch(addProduct({ id: 1, name: "Something" }))}
        >
          <h2>Click me!</h2>
        </button>
      </div>
    </div>
  );
}

export default Counter;

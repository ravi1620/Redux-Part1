import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import "./App.css";

function App() {
  let inputRef = useRef();
  let dispatch = useDispatch();
  let storeObj = useSelector((store) => {
    return store;
  });
  return (
    <div className="App">
      <input ref={inputRef}></input>
      <button
        onClick={() => {
          dispatch({ type: "addActors", data: inputRef.current.value });
        }}
      >
        Actors
      </button>
      <button
        onClick={() => {
          dispatch({ type: "addActresses", data: inputRef.current.value });
        }}
      >
        Actresses
      </button>
      <button
        onClick={() => {
          dispatch({ type: "addDirectors", data: inputRef.current.value });
        }}
      >
        Directors
      </button>

      <br></br>
      <h1>Actors:{storeObj ? storeObj.actors.join() : null}</h1>
      <h1>Actresses:{storeObj ? storeObj.actresses.join() : null}</h1>
      <h1>Directors:{storeObj ? storeObj.directors.join() : null}</h1>
    </div>
  );
}

export default App;

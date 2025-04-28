import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  async function ap() {
    try {
      let reso = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      let secnd = reso.data;
      console.log(secnd);
    } catch (error) {
      console.log(error);
    }
  }

  ap();
  let [btn, setBtn] = useState(0);
  let [boat, setBoat] = useState("");
  const addbtn = () => {
    setBtn((val) => {
      return val + 1;
    });
  };
  const decbtn = () => {
    setBtn((cval) => {
      return cval - 1;
    });
  };

  const chval = (ch: React.ChangeEvent<HTMLInputElement>) => {
    setBoat(ch.target.value);
  };
  return (
    <div className="App">
      <h1>useState</h1>
      <h1>{btn}</h1>
      <input type="text" onChange={chval} />
      <h2>{boat}</h2>
      <button onClick={addbtn}>+1</button>
      <button onClick={decbtn}>-1</button>
    </div>
  );
}

export default App;

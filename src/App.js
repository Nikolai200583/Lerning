import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import Inputer from "./Inputer";

function App() {
  // let likes = 3;

  // function increment () {/////счетчик не увеличивается, так как реакт должен еще и следить за состоянием.
  //   likes += 1;
  //   console.log(likes);
  // } Далее создадим фугкцию состоянием

  // const [likes, setLikes] = useState(0);
  // const [value, setValue] = useState("Текст в инпуте");

  // function increment() {
  //   setLikes(likes + 1);
  // }

  // function decrement() {
  //   setLikes(likes - 1);////// счетчик мы передали в компонетн COUNTER сщ всеми функциями
  // }
  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <Inputer />
      {/* <h1>{likes}</h1> */}
      {/* <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      /> */}
      {/* <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button> */}
    </div>
  );
}

export default App;

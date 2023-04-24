import React, { useState } from "react";
const Inputer = () => {
  const [value, setValue] = useState("Текст в инпуте");

  return (
    <div>
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};
export default Inputer;

import React ,{useState} from "react";

export const Tree = () => {
  const [Counter, setCounter] = useState(0)

  const Increment = () =>{
          setCounter(Counter+1)
  }

  return <div>
      <h1>{Counter}</h1>
    <button onClick={Increment}>Increment </button>
  </div>;
};

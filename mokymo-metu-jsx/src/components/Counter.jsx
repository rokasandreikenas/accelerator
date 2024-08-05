import { useState } from "react";

// use nusako, kad funkcija yra hooksas
// hooksas - speciali React funkcija kuri gali naudoti kitus hooksus

// regular functions vs arrow functions

// atlikus betkurį setState metodą daromas rerenderis

function Counter() {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState(null);
  const [personName, setPersonName] = useState("");

  const title = `#${count} ${personName}`;

  // person setPerson
  // active setActive
  // user setUser
  // token setToken

  const increment = () => {
    setCount(count + 1);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setPersonName(event.target.value);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me</button>
      <button
        onClick={() => setPerson({ name: "Rokas", surname: "Andreikenas" })}
      >
        Login
      </button>
      {person ? <div>{person.name} yra prisijunges</div> : "Offline"}
      <br />
      <br />
      <input type="text" value={personName} onChange={handleChange} />
      Typed text: {personName}
      <br />
      {title}
    </div>
  );
}

export default Counter;

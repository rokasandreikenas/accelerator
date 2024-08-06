import NumberList from "./components/NumberList";
import WelcomeMessage from "./components/WelcomeMessage";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import MultiInputForm from "./components/MultiInputForm";
import { useState } from "react";
import { CiBeerMugFull } from "react-icons/ci";
import Test from "./components/Test";
import Users from "./components/Users";

function App() {
  const [array, setArray] = useState([]);

  const item = 5;

  const handleAddNumber = () => {
    // first way
    // const arrayCopy = [...array]; // array kopija
    // arrayCopy.push(item); // [5]
    // setArray(arrayCopy);

    // second way
    // setArray([...array, item])

    // third way (recommended)
    setArray((prevArray) => [...prevArray, item]);

    // fourth way
    // const updatedArray = [...array, item]; // array kopija + naujas itemas
    // setArray(updatedArray);
  };

  const handleRemoveItem = () => {
    setArray((prevArray) =>
      prevArray.filter((arrayItem) => arrayItem !== item)
    );
  };

  const handleUpdateItem = () => {
    const updateItem = 7;
    setArray((prevArray) =>
      prevArray.map((arrayItem) =>
        arrayItem === item ? updateItem : arrayItem
      )
    );
  };

  return (
    <div>
      <WelcomeMessage name="Rokas" />
      <WelcomeMessage name="Tomas" />
      <WelcomeMessage name="Jurga" />
      <NumberList numbers={[1, 2, 3]} />
      <NumberList numbers={[50, 100]} />
      <Greeting name="Rokas" age={25} />
      <Greeting name="Tomas" age={35} isActive />
      <Counter />
      <br />
      <MultiInputForm />
      <button onClick={handleAddNumber}>Add extra number</button>
      <button onClick={handleRemoveItem}>Remove array item</button>
      <button onClick={handleUpdateItem}>Update array item</button>
      <CiBeerMugFull fontSize={48} />
      <Test />
      <Users />
    </div>
  );
}

export default App;

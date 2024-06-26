import { useState } from "react";

const Home = () => {
  const [names, setNames] = useState(["tadas"]);

  const person = {
    name: "Rokas",
    surname: "Andreikenas",
  };

  const worker = {
    role: "software engineer",
  };

  // person + worker {name, surname, role}
  const workerPerson = {
    ...person,
    ...worker,
  };

  console.log(workerPerson);

  const numbers1 = [1, 2, 3];
  const numbers2 = [4, 5, 6];

  // numbers1 + numbers2
  const numbers = [...numbers1, ...numbers2];

  console.log(numbers);

  const handleAddName = () => {
    const fakeName = "rokas";
    const newNames = [...names, fakeName]; // ['tadas', 'rokas']
    // setNames(newNames);
    setNames([...names, fakeName]);

    setNames((prevNames) => [...prevNames, fakeName]); // better - todel, kad naudoja state toki koks yra tuo metu
  };

  return (
    <div>
      Namai
      <h2>Papildomas tekstas</h2>
      <button onClick={handleAddName}>Add new name</button>
    </div>
  );
};

export default Home;

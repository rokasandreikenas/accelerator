import { useEffect } from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/todos";

const AxiosExample = () => {
  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
      });
  }, []);

  const todo = {
    name: "Test",
  };

  const createItem = async () => {
    const resp = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }); // old way

    const response = await axios.post(URL, todo); // new way
  };

  useEffect(() => {
    axios
      .get(URL)
      .then((resp) => resp.data)
      .then((response) => {
        console.log(response);
      });
  }, []);
  return <div>App</div>;
};

export default AxiosExample;

import { useState } from "react";
import { useCreateUser } from "../hooks/useCreateUser";

const CreateUser = () => {
  const [name, setName] = useState("");
  const { mutate } = useCreateUser();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({ name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUser;

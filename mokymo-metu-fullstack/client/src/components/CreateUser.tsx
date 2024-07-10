import { useState } from "react";
import { useCreateUser } from "../hooks/useCreateUser";

const CreateUser = () => {
  const [name, setName] = useState("");
  const { mutate, mutateAsync, isPending } = useCreateUser();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser = { name };
    mutate(newUser);
    await mutateAsync(newUser); // asinchroniškai
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
      <button type="submit" disabled={isPending}>
        Create User
      </button>
    </form>
  );
};

export default CreateUser;

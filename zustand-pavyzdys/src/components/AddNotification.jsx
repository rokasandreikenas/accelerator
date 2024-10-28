import { useState } from "react";
import useNotificationStore from "../hooks/useNotificationStore";

const AddNotification = () => {
  const [value, setValue] = useState("");
  const addNotification = useNotificationStore(
    (state) => state.addNotification
  );

  return (
    <div>
      <input
        placeholder="notification"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => addNotification(value)}>Add notification</button>
    </div>
  );
};

export default AddNotification;

import { create } from "zustand";

let nextNotificationId = 0;

const useNotificationStore = create((set) => ({
  notifications: [],
  addNotification: (message) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { id: nextNotificationId++, text: message },
      ],
    })),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((notif) => notif.id !== id),
    })),
}));

// Komponentai
const Notifications = () => {
  const { notifications, removeNotification } = useNotificationStore(
    (state) => ({
      notifications: state.notifications,
      removeNotification: state.removeNotification,
    })
  );

  return (
    <div>
      {notifications.map((notif) => (
        <div key={notif.id}>
          {notif.text}
          <button onClick={() => removeNotification(notif.id)}>Close</button>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const addNotification = useNotificationStore(
    (state) => state.addNotification
  );

  return (
    <div>
      <button
        onClick={() =>
          addNotification("New Notification: You have a new message!")
        }
      >
        Add Notification
      </button>
      <Notifications />
    </div>
  );
};

export default App;

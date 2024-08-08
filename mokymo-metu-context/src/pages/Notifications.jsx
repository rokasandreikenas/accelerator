import NotificationList from "../components/NotificationList";
import { useNotificationStore } from "../hooks/useNotifications";

const Notifications = () => {
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
      <NotificationList />
    </div>
  );
};

export default Notifications;

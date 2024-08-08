import { useNotificationStore } from "../hooks/useNotifications";

const NotificationList = () => {
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

export default NotificationList;

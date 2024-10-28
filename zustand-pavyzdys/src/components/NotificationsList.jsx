import useNotificationStore from "../hooks/useNotificationStore";

const NotificationsList = () => {
  const notifications = useNotificationStore((state) => state.notifications);
  const removeNotification = useNotificationStore(
    (state) => state.removeNotification
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

export default NotificationsList;

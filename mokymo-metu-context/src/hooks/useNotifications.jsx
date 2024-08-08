import { create } from "zustand";

let nextNotificationId = 0;

// hook
export const useNotificationStore = create((set) => ({
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

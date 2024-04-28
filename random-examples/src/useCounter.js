import { useEffect } from "react";
import { create } from "zustand";
import { useLocalStorage } from "./useLocalStorage"; // Import your hook

const useStore = create((set, get) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),

  // Persisted state management
  persistedCount: 0,
  setPersistedCount: (value) => set({ persistedCount: value }),
}));

// Function to manage persisted state
function usePersistedCount() {
  const [persistedCount, setPersistedCount] = useLocalStorage("countKey", 0);
  const storeSet = useStore((state) => state.setPersistedCount);

  useEffect(() => {
    storeSet(persistedCount);
  }, [persistedCount, storeSet]);

  return setPersistedCount;
}

export default usePersistedCount;

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoritesStore = create(
  persist(
    (set) => ({
      // Listen starter uden favoritter
      favorites: [],

      // Tilføj eller fjern en hund fra favoritter
      toggleFavorite: (dogId) =>
        set((state) => ({
          favorites: state.favorites.includes(dogId)
            ? state.favorites.filter((id) => id !== dogId)
            : [...state.favorites, dogId],
        })),
    }),
    {
      name: "familyfriends-favorites",
    },
  ),
);

import { useCallback, useState } from "react";

/**
 * Favorites kept in the browser, scoped by storage key.
 *
 * Lifted from the River Tracker so the two trackers behave identically. The
 * only thing that differs between them is the key, so that stays a parameter.
 *
 * localStorage is per-browser and can be unavailable (private windows, full
 * quota), so every access is guarded and failure is silent. Losing a favorites
 * list is an annoyance, not an error worth showing anyone.
 */

function loadFavorites(key: string): Set<string> {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? new Set<string>(parsed) : new Set();
  } catch {
    return new Set();
  }
}

function saveFavorites(key: string, favorites: Set<string>) {
  try {
    localStorage.setItem(key, JSON.stringify([...favorites]));
  } catch {
    // Storage full or unavailable — non-fatal
  }
}

export function useFavorites(storageKey: string) {
  const [favorites, setFavorites] = useState<Set<string>>(() =>
    loadFavorites(storageKey),
  );

  const toggleFavorite = useCallback(
    (id: string) => {
      setFavorites((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        saveFavorites(storageKey, next);
        return next;
      });
    },
    [storageKey],
  );

  const isFavorite = useCallback((id: string) => favorites.has(id), [favorites]);

  return { favorites, toggleFavorite, isFavorite };
}

const API_BASE = import.meta.env.VITE_API_URL;

export async function getOutfitSuggestions(clothingItem, gender) {
  const res = await fetch(`${API_BASE}/combination`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ clothingItem, gender}),
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.statusText}`);
  }

  return res.json();
}
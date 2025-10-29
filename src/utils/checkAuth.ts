const API_URL = import.meta.env.DEV
  ? "http://localhost:8787"
  : "https://api.joetracks.com";

export async function checkAuth(): Promise<boolean> {
  const token = localStorage.getItem("authToken");
  if (!token) return false;

  try {
    const res = await fetch(`${API_URL}/api/verify`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.ok;
  } catch (err) {
    console.error("Auth check failed:", err);
    return false;
  }
}

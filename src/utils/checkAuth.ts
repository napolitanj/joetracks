export async function checkAuth(): Promise<boolean> {
  const token = localStorage.getItem("authToken");
  if (!token) return false;

  try {
    const res = await fetch("/api/verify", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.ok;
  } catch (err) {
    console.error("Auth check failed:", err);
    return false;
  }
}

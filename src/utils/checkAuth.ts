export async function checkAuth(): Promise<boolean> {
  const token = localStorage.getItem("auth_token");
  if (!token) return false;

  try {
    const res = await fetch("/api/pages?siteId=site_demo&path=/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.ok;
  } catch (err) {
    console.error("Auth check failed:", err);
    return false;
  }
}

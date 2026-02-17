const API_URL = import.meta.env.DEV
  ? "http://localhost:8787"
  : "https://api.joetracks.com";

export async function login(password: string) {
  const res = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });

  if (!res.ok) {
    throw new Error("Invalid password");
  }

  const data = await res.json();

  // ✅ single consistent key
  if (data.token) {
    localStorage.setItem("authToken", data.token);
  }

  return data;
}

export async function verifyToken() {
  const token = localStorage.getItem("authToken");
  if (!token) return false;

  const res = await fetch(`${API_URL}/api/verify`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.ok;
}

export async function getPage(siteId: string, path: string) {
  const res = await fetch(`${API_URL}/api/pages?siteId=${siteId}&path=${path}`);
  return res.json();
}

export async function savePage(siteId: string, path: string, data: object) {
  const token = localStorage.getItem("authToken");

  const res = await fetch(`${API_URL}/api/pages`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ siteId, path, data }),
  });

  if (!res.ok) {
    throw new Error("Failed to save page");
  }

  return res.json();
}

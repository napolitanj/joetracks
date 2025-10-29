export function isTokenValid(token: string | null): boolean {
  if (!token) return false;

  try {
    const [, payloadBase64] = token.split(".");
    const payload = JSON.parse(atob(payloadBase64));

    if (payload.exp && Date.now() / 1000 > payload.exp) {
      return false;
    }

    return true;
  } catch (err) {
    console.error("Invalid token format:", err);
    return false;
  }
}

export function logout() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("isAuthorized");
  window.dispatchEvent(new Event("auth-change"));
  window.location.href = "/login";
}

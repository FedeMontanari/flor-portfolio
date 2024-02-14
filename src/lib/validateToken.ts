export default async function validateToken(payload: { token: string }) {
  const response = await fetch("/api/validate", {
    method: "post",
    body: JSON.stringify(payload),
  });
  if (response.status == 200) return true;
  return false;
}

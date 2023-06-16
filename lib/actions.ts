export async function getData() {
  const res = await fetch("http://localhost:3000/api/actions", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

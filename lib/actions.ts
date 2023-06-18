export async function getData(actionType:string) {
  const res = await fetch(`http://localhost:3000/api/actions/${actionType}`, { cache: "no-cache" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();

}

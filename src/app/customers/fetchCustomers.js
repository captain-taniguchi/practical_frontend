export default async function fetchCustomers() {
  console.log(process.env.NEXT_PUBLIC_ENDPOINT,"endpoint");//NEXT_PUBLIC_ENDPOINTに敢えて設定しているから注意（★APIと書いていない）
  const res = await fetch(process.env.NEXT_PUBLIC_ENDPOINT + "/allcustomers", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch customers");
  }
  return res.json();
}
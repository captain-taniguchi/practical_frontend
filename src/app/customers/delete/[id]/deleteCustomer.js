export default async function deleteCustomer(id) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_ENDPOINT + `/customers?customer_id=${id}`,
    {
      method: "DELETE",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to delete customer");
  }
}
